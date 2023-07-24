import React, { useState, forwardRef, Fragment } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, IconButton, Radio, RadioGroup, Zoom } from '@mui/material'
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled'
import useAppStateContext from '../hooks/useAppStateContext'
import { useNavigate } from 'react-router-dom'

const Transition = forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />
})

export default function RestartA() {
  const { setState, setValue, setPath } = useAppStateContext()
  const [selectedValue, setSelectedValue] = useState('a')
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setSelectedValue(e.target.value)
  }
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleReset = () => {
    setState(false)
    setValue('existing-service')
    setPath('/existing-service')
    setSelectedValue('a')
    navigate('/')
    setTimeout(handleClose(), 500)
  }

  return (
    <Fragment>
      <IconButton
        sx={{ fontSize: '4rem' }}
        variant='contained'
        onClick={handleClickOpen}
        color='primary'
        size='large'
      >
        <ReplayCircleFilledIcon fontSize='inherit' />
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          sx={{
            backgroundColor: "#ff0037",
            fontFamily: "Bandwidth",
            color: "#ffffff",
            marginX: 0,
            paddingX: 4,
            paddingTop: 1,
            paddingBottom: 0,
          }}
        >
          {"Restart workflow?"}
        </DialogTitle>
        <DialogContent
          sx={{
            backgroundColor: "#141928"
          }}
        >
          <DialogContentText
            id="alert-dialog-slide-description"
            sx={{
              fontFamily: "object-sans",
              backgroundColor: "#141928",
              color: "#ffffff",
              fontStyle: 'italic',
              paddingTop: 2,
            }}
          >
            <p>Restart from...</p>
            <FormControl
              sx={{
                '& .MuiFormControlLabel-label': {
                  fontWeight: 'medium',
                  flexGrow: 1,
                  textAlign: 'justify',
                  fontStyle: "normal",
                },
                marginLeft: 2
              }}
            >
              <RadioGroup value={selectedValue} onChange={handleChange}>
                <FormControlLabel
                  value="a"
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: '#ffffff',
                        '&.Mui-checked': {
                          color: '#ffffff',
                        },
                      }}              
                    />
                  }
                  label="Eligibility Tool"
                />
              </RadioGroup>
            </FormControl>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#141928" }}>
          <Button onClick={handleClose}>Go Back</Button>
          <Button onClick={handleReset}>Restart</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}
