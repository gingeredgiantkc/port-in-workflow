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
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import useAppStateContext from '../hooks/useAppStateContext'

function HomeLayout() {
  const { value } = useAppStateContext()

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
          </Box>
          <Box sx={{ pt: 2, mx: 'auto', flexGrow: 1, textAlign: 'end', mr: 2 }}>
            <IconButton
              sx={{ fontSize: '4rem' }}
              variant='contained'
              component={NavLink}
              to={value}
              color='success'
              size='large'
            >
              <ArrowCircleRightIcon fontSize='inherit' />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}

export default HomeLayout