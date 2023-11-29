import React from 'react'
import { ThemeProvider } from '@mui/material'
import Breadcrumbs from '../components/Breadcrumbs'
import { theme } from '../theme'
import useProcessFlowContext from '../hooks/useProcessFlowContext'
import { Appointment, Billing, Credit, End, Order, Prospect, Provider, Review, Start } from '../pages/process'

export  function Process() {
  const { stepNumber, taskState } = useProcessFlowContext()
  const { task1, task2, task3, task4, task5 } = taskState

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
        <div className='col-start-1 col-end-3 bg-torch-red border-r-4 border-r-white px-10'>
          <img src='./src/assets/frontier.svg'
            alt='small logo'
            style={{
              width: "auto",
              height: "100%",
            }}
          />
        </div>
        <div className='row-start-2 row-span-full col-start-1 col-end-3 bg-torch-red border-r-4 border-r-white'>
          <div className='flex flex-col flex-wrap xl:px-2 2xl:px-8 pt-4'>
            <Breadcrumbs />
          </div>
        </div>
        <div className='row-start-1 col-start-3 col-end-13 row-span-6'>
          {displayStep(stepNumber)}
        </div>
      </div>
    </ThemeProvider>
  )
}