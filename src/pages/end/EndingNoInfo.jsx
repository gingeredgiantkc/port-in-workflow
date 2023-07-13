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
            An account number and PIN are required to complete a port-in. 
            <List>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Offer to follow-up with the customer at a time when he/she can provide the required information." />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Set the follow-up in HUB." />
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
                <ListItemText primary="Disposition and close the call." />
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </Fragment>  )
}