import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import {
  Box,
  IconButton,
  ThemeProvider,
} from '@mui/material'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled'
import useAppStateContext from '../hooks/useAppStateContext'
import Breadcrumbs from '../components/Breadcrumbs'
import Modal from '../components/Modal'
import { theme } from '../theme'

function RootLayout() {
  const { pages, value, handleOpen, firstPage, setFirstPage } = useAppStateContext()

  let navigate = useNavigate()
  let location = useLocation()

  console.log('pages:', pages)

  const goNext = () => {
    if (firstPage) {
      navigate('/existing-service')
      setFirstPage(!firstPage)
    } else {
      const nextPage = location.pathname + `/${value}`
      navigate(nextPage)
    }
  }

  const goBack = () => {
    navigate(-1)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className='bg-midnight-express w-3/4 h-screen mx-auto rounded-s-sm grid grid-cols-12 grid-rows-6'>
        <div className='col-start-1 col-end-3 row-span-full bg-torch-red border-r-4 border-r-white pt-32'>
          <div className='flex flex-col flex-wrap'>
            <Breadcrumbs />
          </div>
        </div>
        <Outlet />
        <div className='row-start-6 col-start-3 col-end-13 place-self-end'>
          <IconButton
            sx={{ fontSize: '4rem' }}
            variant='contained'
            onClick={handleOpen}
            color='primary'
            size='large'
          >
            <ReplayCircleFilledIcon fontSize='inherit' />
          </IconButton>
          {/*
          <IconButton
            sx={{ fontSize: '4rem' }}
            variant='contained'
            onClick={goBack}
            color='primary'
            size='large'
          >
            <ArrowCircleLeftIcon fontSize='inherit' />
          </IconButton>
          */}
          <IconButton
            sx={{ fontSize: '4rem' }}
            variant='contained'
            onClick={goNext}
            color='primary'
            size='large'
          >
            <ArrowCircleRightIcon fontSize='inherit' />
          </IconButton>
        </div>
        <Modal />
      </div>
    </ThemeProvider>
  )
}

export default RootLayout