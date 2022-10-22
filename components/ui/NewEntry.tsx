import AddIcon from '@mui/icons-material/Add'
import SaveIcon from '@mui/icons-material/Save'
import { Box, Button, TextField } from '@mui/material'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { EntriesContext } from '../../context/entries'
import { UIContext } from '../../context/ui'
export const NewEntry = () => {
  const [inputValue, setInputValue] = useState('')
  const [touched, setTouched] = useState(false)
  const { setIsAddingEntry, isAddingEntry } = useContext(UIContext)

  const { addNewEntry } = useContext(EntriesContext)
  const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onSave = () => {
    if (inputValue.length === 0) return
    addNewEntry(inputValue)
    setIsAddingEntry(false)
  }
  useEffect(() => {
    setTouched(false)
    setInputValue('')
  }, [isAddingEntry])

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="Nueva entrada"
            autoFocus
            multiline
            label="Nueva entrada"
            error={inputValue.length <= 0 && touched}
            value={inputValue}
            onChange={onTextFieldChanged}
            onBlur={() => setTouched(true)}
          />

          <Box display="flex" justifyContent={'space-between'}>
            <Button onClick={() => setIsAddingEntry(false)} variant="outlined">
              Cancelar
            </Button>
            <Button
              onClick={onSave}
              variant="outlined"
              color="secondary"
              endIcon={<SaveIcon />}>
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          onClick={() => setIsAddingEntry(true)}
          fullWidth
          variant="outlined"
          startIcon={<AddIcon />}>
          Añadir
        </Button>
      )}
    </Box>
  )
}
