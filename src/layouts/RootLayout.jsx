import React from 'react'
import { Outlet } from 'react-router-dom'
import {
  Box,
  Card,
  CardContent,
  createTheme,
  ThemeProvider
} from '@mui/material'

function RootLayout() {
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
          <Box sx={{ flexGrow: 1 }}>
            <Outlet />
          </Box>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}

export default RootLayout