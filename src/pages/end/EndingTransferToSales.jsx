import React, { Fragment } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Title from '../../components/Title'

export default function EndingNoInfo() {
  return (
    <Fragment>
      <Title label="Ending the Call" />
      <div className='row-start-2 col-start-3 col-end-13 row-span-4'>
        <div className='grid grid-cols-12 grid-rows-6'>
          <div className='col-start-1 col-end-9 row-span-5 text-white font-medium ml-4 mt-4'>
            Callers without active accounts who wish to establish any service in addition to voice should be transferred to Sales.<br /><br />
            <List>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Gain permission from your supervisor to transfer the call to Sales." />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Complete notes of the interaction." />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Give closing statements." />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Disposition and transfer the call." />
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </Fragment>
  )
}