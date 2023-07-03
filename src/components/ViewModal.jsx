import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import useAppStateContext from '../hooks/useAppStateContext';
import Grid, { Body, Title } from './Grid';
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

export default function ViewModal() {
  const { value, open, handleClose, handleReset } = useAppStateContext()
  const navigate = useNavigate()
  const handleConfirm = () => {
    handleReset();
    navigate('/');
    console.log(value);
    handleClose();
  }
  return (
    <div>
      <Modal
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
            <Grid
              sx={{
                gridTemplateColumns: 'repeat(13, 1fr)',
                gridTemplateRows: 'repeat(4, 0.5fr)',
              }}
            >
              <Title
                sx={{
                  gridColumn: '1 / 13',
                  alignSelf: 'justify-center',
                  fontSize: '1.25rem',
                  textAlign: 'center',
                  fontWeight: 'medium',                        
                }}
              >
                Are you sure you want to start over?
              </Title>
              <Body
                sx={{
                  gridColumn: '2 / 13',
                  gridRow: '3 / 5',
                  textAlign: 'end',
                  gap: 2,
                }}
              >
                <Button onClick={handleClose} variant='contained' color='warning'>
                  Cancel
                </Button>
                <span className='tab' />
                <Button onClick={handleConfirm} variant='contained' color='error'>
                  Reset
                </Button>
              </Body>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}