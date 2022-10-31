import { Box, Modal as MaterialModal } from '@mui/material'
import { useContext } from 'react'
import { UIContext } from '../../context/ui'
import { FormEntry } from './FormEntry'

const style = {
  position: 'absolute' as 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '35%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
}

export const Modal = () => {
  const { isOpenModal, setIsOpenModal } = useContext(UIContext)

  return (
    <MaterialModal
      open={isOpenModal}
      onClose={() => setIsOpenModal(false)}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description">
      <Box sx={style}>
        <h1>Modal</h1>
        <FormEntry />
      </Box>
    </MaterialModal>
  )
}
