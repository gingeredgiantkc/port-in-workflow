import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  Card,
  CardContent,
  createTheme,
  ThemeProvider
} from '@mui/material'
import useAppStateContext from '../hooks/useAppStateContext'

function RootLayout() {
  const { value } = useAppStateContext()
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }

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
          <Box sx={{ pt: 2, mx: 'auto', flexGrow: 1, textAlign: 'center' }}>
            <Button
              sx={{ mx: 1 }}
              variant='contained'
              onClick={goBack}
              color='success'
            >
              Back
            </Button>
            <Button
              sx={{ mx: 1 }}
              variant='contained'
              component={NavLink}
              to={value}
              color='success'
            >
              Next
            </Button>
          </Box>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}

export default RootLayout