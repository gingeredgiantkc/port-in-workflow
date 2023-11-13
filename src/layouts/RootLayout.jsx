import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { IconButton, ThemeProvider } from '@mui/material'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import useAppStateContext from '../hooks/useAppStateContext'
import Breadcrumbs from '../components/Breadcrumbs'
import Modal from '../components/Modal'
import { theme } from '../theme'
import RestartA from '../components/RestartA'
import './layouts.css'

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
      <div id="bg">
        <div id="logo">
          <img src='./src/assets/frontier.svg'
            alt='small logo'
            style={{
              fill: "#ff0037",
              width: "100%",
              height: "100%"
            }}
          />
        </div>
        <div id="band-1" />
        <div id="band-2" />
        <div id="band-3" />
        <div className='body'>
          <div className="left-pane">
            <div className="breadcrumbs">
              <Breadcrumbs />
            </div>
          </div>
          <Outlet />
          <div className="navigation">
            <RestartA />
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
        </div>
        <div id="band-4" />
        <div id="band-5" />
        <div id="band-6" />
      </div>
      <Modal />
    </ThemeProvider>
  )
}

export default RootLayout