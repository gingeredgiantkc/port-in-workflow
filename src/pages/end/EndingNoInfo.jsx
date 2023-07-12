import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export default function EndingNoInfo() {
  return (
    <div>
      <span className='text-midnight-express py-0'>
          Ending the Call
      </span>
        <div className='flex-auto mr-12 -mt-4 py-0 border-t-4 transition duration-500 ease-in-out border-torch-red' />
        <div className='flex-auto mr-36 mt-2 border-t-4 transition duration-500 ease-in-out border-midnight-express' />
        An account number and PIN are required to complete a port-in. 
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
    </div>
  )
}