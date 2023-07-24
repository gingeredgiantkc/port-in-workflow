import React from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import RestartB from './RestartB'
import { IconButton } from '@mui/material'
import useProcessFlowContext from '../hooks/useProcessFlowContext'
import { useNavigate } from 'react-router-dom'

const Navigation = (props) => {
  const { steps, stepNumber, handleNextStep, handlePrevStep } = useProcessFlowContext()
  const { disabled } = props
  const totalSteps = steps.length
  const isLastStep = stepNumber === totalSteps
  const navigate = useNavigate()

  return (
    <div className='flex flex-row self-center place-self-end'>
      <RestartB />
      <IconButton
        sx={{
          fontSize: '4rem',
          '&.Mui-disabled': {
            color: '#808080',
          },
        }}
        variant='contained'
        onClick={handlePrevStep}
        disabled={stepNumber <= 1}
        color='primary'
        size='large'
      >
        <ArrowCircleLeftIcon fontSize='inherit' />
      </IconButton>
      <IconButton
        sx={{
          fontSize: '4rem',
          '&.Mui-disabled': {
            color: '#808080',
          },
        }}
        variant='contained'
        onClick={isLastStep ? navigate("/complete") : handleNextStep}
        disabled={disabled}
        color='primary'
        size='large'
      >
        <ArrowCircleRightIcon fontSize='inherit' />
      </IconButton>
    </div>
  )
}

export default Navigation