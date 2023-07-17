import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { IconButton, ThemeProvider } from '@mui/material'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled'
import useAppStateContext from '../hooks/useAppStateContext'
import Breadcrumbs from '../components/Breadcrumbs'
import Modal from '../components/Modal'
import { theme } from '../theme'

function RootLayout() {
  const { handleOpen, setPath, path, value } = useAppStateContext()
  let navigate = useNavigate()
  let location = useLocation()
  const handleClick = () => navigate(path)  
  
  console.log("path", path)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPath(location.pathname + value)
    }, 500)
    return () => {
      clearTimeout(timeout)
    }
  }, [value])

  return (
    <ThemeProvider theme={theme}>
      <div className='bg-midnight-express shadow-xl shadow-slate-800 w-3/4 h-screen mx-auto rounded-s-sm grid grid-cols-12 grid-rows-6'>
        <div className='col-start-1 col-end-3 bg-torch-red border-r-4 border-r-white' />
        <div className='row-start-2 row-span-full col-start-1 col-end-3 bg-torch-red border-r-4 border-r-white'>
          <div className='flex flex-col flex-wrap justify-self-center'>
            <Breadcrumbs />
          </div>
        </div>
        <div className='row-start-1 col-start-3 col-end-13 row-span-5'>
          <Outlet />
        </div>
        <div className='row-start-6 col-start-3 col-end-13 self-center justify-self-end'>
          <IconButton
            sx={{ fontSize: '4rem' }}
            variant='contained'
            onClick={handleOpen}
            color='primary'
            size='large'
          >
            <ReplayCircleFilledIcon fontSize='inherit' />
          </IconButton>
          <IconButton
            sx={{ fontSize: '4rem' }}
            variant='contained'
            onClick={handleClick}
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