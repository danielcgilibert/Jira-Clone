import AddIcon from '@mui/icons-material/Add'
import SaveIcon from '@mui/icons-material/Save'
import { Box, Button, TextField } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
export const NewEntry = () => {
  const [isAdding, setIsAdding] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [touched, setTouched] = useState(false)

  const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onSave = () => {
    if (inputValue.length === 0) return

    console.log(inputValue)
  }
  useEffect(() => {
    setTouched(false)
    setInputValue('')
  }, [isAdding])

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAdding ? (
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
            <Button onClick={() => setIsAdding(false)} variant="outlined">
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
          onClick={() => setIsAdding(true)}
          fullWidth
          variant="outlined"
          startIcon={<AddIcon />}>
          Añadir
        </Button>
      )}
    </Box>
  )
}
