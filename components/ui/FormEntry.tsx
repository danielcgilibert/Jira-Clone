import SaveIcon from '@mui/icons-material/Save'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { entriesApi } from '../../api'
import { EntriesContext } from '../../context/entries'
import { UIContext } from '../../context/ui'
import { Entry } from '../../interfaces'

export const FormEntry = () => {
  const [entry, setEntry] = useState<Entry | any>({})
  const [inputDescription, setInputDescription] = useState('')
  const { selectedEntry, updateEntry } = useContext(EntriesContext)
  const { setIsOpenModal } = useContext(UIContext)

  const getEntry = async (idEntry: string) => {
    const { data } = await entriesApi.get<Entry>(`/entries/${idEntry}`)
    return data
  }
  const handleUpdatedEntry = (event: any) => {
    event.preventDefault()
    entry.description = inputDescription
    updateEntry(entry)
    setIsOpenModal(false)
  }

  useEffect(() => {
    getEntry(selectedEntry).then(entry => {
      setEntry(entry)
      setInputDescription(entry.description)
    })
  }, [])

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        gap={2}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Entry ID : {entry._id}
        </Typography>
        <TextField
          id="outlined-basic"
          multiline
          variant="outlined"
          onChange={e => setInputDescription(e.target.value)}
          value={inputDescription}
        />
        <Button
          onClick={handleUpdatedEntry}
          variant="outlined"
          color="secondary"
          endIcon={<SaveIcon />}>
          Guardar
        </Button>
      </Grid>
    </>
  )
}
