import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import { Modal as MuiModal } from '@mui/material';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import useAppStateContext from '../hooks/useAppStateContext';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Modal() {
  const { open, handleClose, handleReset } = useAppStateContext()
  const navigate = useNavigate()
  const handleConfirm = () => {
    handleReset();
    navigate('/');
    handleClose();
  }
  return (
    <div>
      <MuiModal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className='font-object-sans'>
               Are you sure you want to start over?
            </div>
            <Button onClick={handleClose} variant='contained' color='secondary'>
              Cancel
            </Button>
            <span className='tab' />
            <Button onClick={handleConfirm} variant='contained' color='error'>
              Reset
            </Button>
          </Box>
        </Fade>
      </MuiModal>
    </div>
  )
}