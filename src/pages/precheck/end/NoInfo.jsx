import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Grid, { Body, Title } from '../../../components/Grid'

export default function NoInfo() {
  return (
    <Grid
      sx={{
        gridTemplateColumns: 'repeat(13, 1fr)',
        gridTemplateRows: 'repeat(6, 1fr)'
      }}
    >
      <Title
        sx={{
          gridColumn: '2 / 11',
          gridRow: '1 / 2',
          alignSelf: 'start',
          fontSize: '3.5rem',
        }}
      >
        <span className='text-midnight-express py-0'>
          Ending the Call
        </span>
        <div className='flex-auto mr-12 -mt-4 py-0 border-t-4 transition duration-500 ease-in-out border-torch-red' />
        <div className='flex-auto mr-36 mt-2 border-t-4 transition duration-500 ease-in-out border-midnight-express' />
      </Title>
      <Body
        sx={{
          gridRow: '2 / 3',
          gridColumn: '2 / 10',
          alignSelf: 'end',
          fontWeight: 'medium'
        }}
      >
        An account number and PIN are required to complete a port-in. 
      </Body>
      <Body
        sx={{
          gridRow: '3 / 7',
          gridColumn: '2 / 11',
          alignSelf: 'flex-start',
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Offer to follow-up with the customer at a time when he/she can provide the required information." />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Set the follow-up in HUB." />
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
            <ListItemText primary="Disposition and close the call." />
          </ListItem>
        </List>
      </Body>
    </Grid>
  )
}