import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IconButton, ThemeProvider } from '@mui/material'
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import Breadcrumbs from '../components/Breadcrumbs'
import Modal from '../components/Modal'
import { theme } from '../theme'
import useProcessFlowContext from '../hooks/useProcessFlowContext'
import { Appointment, Billing, Credit, End, Order, Prospect, Provider, Review, Start } from '../pages/process'

export default function ProcessLayout() {
  const { steps, stepNumber, handleOpen, handleNextStep, handlePrevStep } = useProcessFlowContext()
  const totalSteps = steps.length
  const isLastStep = stepNumber === totalSteps
  const navigate = useNavigate()

  const displayStep = (step) => {
    switch(step) {
      case 1: {
        return (
          <Start />
        )
      }
      case 2: {
        return (
          <Prospect />
        )
      }
      case 3: {
        return (
          <Order />
        )
      }
      case 4: {
        return (
          <Credit />
        )
      }
      case 5: {
        return (
          <Provider />
        )
      }
      case 6: {
        return (
          <Billing />
        )
      }
      case 7: {
        return (
          <Appointment />
        )
      }
      case 8: {
        return (
          <Review />
        )
      }
      case 9: {
        return (
          <End />
        )
      }
      default: return null
    }
  }

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
          {displayStep(stepNumber)}
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
            onClick={stepNumber > 1 ? handlePrevStep : undefined}
            color='primary'
            size='large'
          >
            <ArrowCircleLeftIcon fontSize='inherit' />
          </IconButton>
          <IconButton
            sx={{ fontSize: '4rem' }}
            variant='contained'
            onClick={isLastStep ? navigate("/complete") : handleNextStep}
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