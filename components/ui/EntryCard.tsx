import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import { DragEvent, FC, useContext } from 'react'
import { EntriesContext } from '../../context/entries'
import { UIContext } from '../../context/ui'
import { Entry } from '../../interfaces'
import { dateFuncions } from '../../utils'

interface Props {
  entry: Entry
}
export const EntryCard: FC<Props> = ({ entry }) => {
  const { setIsDragging, setIsOpenModal } = useContext(UIContext)
  const { selectEntry } = useContext(EntriesContext)

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', entry._id)
    setIsDragging(true)
  }

  const onDragEnd = (event: DragEvent<HTMLDivElement>) => {
    setIsDragging(false)
  }

  const handleSelectEntry = () => {
    setIsOpenModal(true)
    selectEntry(entry._id)
  }

  return (
    <Card
      sx={{ marginBottom: 1, borderRadius: '0.5rem' }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onClick={handleSelectEntry}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            {entry.description}
          </Typography>
        </CardContent>

        <CardActions
          sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant="body2">
            {dateFuncions.dateFuncions(entry.createdAt)}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
