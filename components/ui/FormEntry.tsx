import SaveIcon from '@mui/icons-material/Save'
import { Button, Grid, TextField, Typography } from '@mui/material'

export const FormEntry = ({ entry }) => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        gap={2}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Entry ID :
        </Typography>
        <TextField
          id="outlined-basic"
          label="Description Entry"
          multiline
          variant="outlined"
          value={entry.description}
        />
        <Button variant="outlined" color="secondary" endIcon={<SaveIcon />}>
          Guardar
        </Button>
      </Grid>
    </>
  )
}
