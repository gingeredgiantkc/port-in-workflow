import { ThemeProvider } from '@mui/material'
import React from 'react'
import { theme } from '../theme'

export default function LastPage() {
  return (
    <ThemeProvider theme={theme}>
      <div className='bg-midnight-express shadow-xl shadow-slate-800 w-3/4 h-screen mx-auto rounded-s-sm flex flex-nowrap flex-row'>
        <div className='flex flex-grow bg-torch-red font-bandwidth text-8xl text-white w-full h-32 my-auto'>
          <p className='mx-auto place-self-center pt-4'>Complete</p>
        </div>
      </div>
    </ThemeProvider>
  )
}
