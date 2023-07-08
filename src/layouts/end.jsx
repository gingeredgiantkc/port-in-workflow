import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {
  Box,
  Card,
  CardContent,
  createTheme,
  IconButton,
  ThemeProvider
} from '@mui/material'
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled'
import useAppStateContext from '../hooks/useAppStateContext'
import ViewModal from '../components/ViewModal'

export default function EndLayout() {
  const { handleOpen } = useAppStateContext()
  
  const theme = createTheme({
    palette: {
      background: {
        paper: '#ffffff',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          bgcolor: 'background.paper',
          height: '90%',
          width: '50%',
          mt: 4,
          mb: 0,
          mx: 'auto',
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Box sx={{ border: 4, borderRadius: '16px', borderColor: 'error.main' }}>
            <Outlet />
            <ViewModal />
          </Box>
          <Box sx={{ pt: 2, gap: 2, textAlign: 'end' }}>
            <IconButton
              sx={{ fontSize: '4rem' }}
              variant='contained'
              onClick={handleOpen}
              color='error'
              size='large'
            >
              <ReplayCircleFilledIcon fontSize='inherit' />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}