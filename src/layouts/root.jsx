import React from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import {
  Box,
  Card,
  CardContent,
  createTheme,
  IconButton,
  ThemeProvider,
} from '@mui/material'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled'
import useAppStateContext from '../hooks/useAppStateContext'
import Breadcrumbs from '../components/Breadcrumbs'
import Grid from '../components/Grid'
import Modal from '../components/Modal'


function RootLayout() {
  const { pages, firstPage, setFirstPage } = useAppStateContext()
  console.log(pages)
  const { value, handleOpen } = useAppStateContext()
  const location = useLocation()
  const handleNext = location.pathname + `/${value}`
    
  let navigate = useNavigate()

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
          <Grid container spacing={2}>
            <Grid>
              <Breadcrumbs />
            </Grid>
            <Grid container spacing={2}>
              <Grid sx={{ border: 4, borderRadius: '16px', borderColor: 'error.main' }}>
                <Outlet />
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent="flex-end"
              alignItems="center"
              flexDirection={{ xs: 'column', sm: 'row' }}
              sx={{ fontSize: '12px' }}
            >
              <Grid spacing={1}>
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
                  <IconButton
                    sx={{ fontSize: '4rem' }}
                    variant='contained'
                    component={NavLink}
                    disabled={firstPage}
                    to={navigate(-1)}
                    color='primary'
                    size='large'
                  >
                    <ArrowCircleLeftIcon fontSize='inherit' />
                  </IconButton>
                  <IconButton
                    sx={{ fontSize: '4rem' }}
                    variant='contained'
                    onClick={() => setFirstPage(false)}
                    component={NavLink}
                    to={firstPage ? '/existing-service' : handleNext}
                    color='primary'
                    size='large'
                  >
                    <ArrowCircleRightIcon fontSize='inherit' />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Modal />
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}

export default RootLayout