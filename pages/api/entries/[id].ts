import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { Entry, IEntry } from '../../../models'

type Data = { message: string } | IEntry

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: 'El id no es válido' })
  }

  switch (req.method) {
    case 'PUT':
      return updateEntry(req, res)

    default:
      return res.status(400).json({ message: 'El id no es válido' })
  }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query
  await db.connect()

  const entryToUpdate = await Entry.findById(id)

  if (!entryToUpdate)
    return res.status(400).json({ message: 'No hay entrada con ese ID' })

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body

  try {
    const updateEntry = await Entry.findByIdAndUpdate(
      id,
      { description, status },
      { runValidators: true, new: true }
    )
    await db.disconnect()
    res.status(200).json(updateEntry!)
  } catch (error: any) {
    await db.disconnect()
    res.status(400).json({ message: error.errors.status.message })
  }
}
