import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export default function EndingTransferToSales() {
  return (
    <div>
        <span className='text-midnight-express py-0'>
          Ending the Call
        </span>
        <div className='flex-auto mr-12 -mt-4 py-0 border-t-4 transition duration-500 ease-in-out border-torch-red' />
        <div className='flex-auto mr-36 mt-2 border-t-4 transition duration-500 ease-in-out border-midnight-express' />
        Callers without active accounts who wish to establish any service in addition to voice should be transferred to Sales.<br /><br />
        <List>
          <ListItem disablePadding>
            <ListItemIcon sx={{ color: 'success' }}>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Gain permission from your Team Lead to transfer the call." />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Explain to the customer that you will be connecting him/her to a Sales Specialist to complete their order." />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Complete notes of the interaction." />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Give closing statements." />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Transfer the call in HUB." />
          </ListItem>
        </List>
      </div>
  )
}