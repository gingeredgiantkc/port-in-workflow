import {
  Card,
  CardMedia,
  Checkbox,
  Dialog,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grow,
  Link
} from '@mui/material'
import Button from '@mui/base/Button'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'

import React, { Fragment, forwardRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useProcessFlowContext from '../../hooks/useProcessFlowContext'

const Transition = forwardRef(function Transition(props, ref) {
  return <Grow style={{ transformOrigin: '0 50% 0' }} ref={ref} {...props} />
})

function Task() {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Fragment>
      <Button onClick={handleClickOpen} className="text-electric-blue hover:text-electric-blue-700 font-object-sans">
        Click Prospect on the Home tab in the HUB.
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <Card sx={{ backgroundColor: "#96fff5" }}>
          <CardMedia
            component="img"
            alt="click prospect"
            src="./src/assets/Prospect/1a.png"
          />
        </Card>
      </Dialog>
    </Fragment>
  )
}

export default function Three() {
  const { taskState, setTaskState } = useProcessFlowContext()
  
  const handleChange = (event) => {
    setTaskState({
      ...taskState,
      [event.target.name]: event.target.checked,
    })
  }

  const { task3 } = taskState
  const location = useLocation()

  return (
    <FormControl sx={{ marginLeft: 3, padding: 0 }} component="fieldset" variant="standard">
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              icon={<CircleOutlinedIcon sx={{ color: "#ffffff" }} />}
              checkedIcon={<CheckCircleIcon color="primary" />}
              checked={task3}
              onChange={handleChange}
              name="task3"
            />
          }
          label={
            <Link component={Task} to={location} />
          }
        />
      </FormGroup>
    </FormControl>
  )
}
