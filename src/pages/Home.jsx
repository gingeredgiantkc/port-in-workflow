import React from 'react'
import { FormControlLabel, RadioGroup, Radio, FormControl } from '@mui/material'
import useAppStateContext from '../hooks/useAppStateContext'
import Grid, { Body, Title } from '../components/Grid'

export default function Home() {
  const { value, setValue } = useAppStateContext()
  console.log({ value });

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <Grid
      sx={{
        gridTemplateColumns: 'repeat(13, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
      }}
    >
      <Title
        sx={{
          gridColumn: '2 / 14',
          gridRow: '1 / 4',
          alignSelf: 'center',
          fontSize: '3.5rem',
          textAlign: 'flex-start',
        }}
      >
        <span className='text-midnight-express'>
          Port In
          <br />
          Pre-Eligibility Checker
        </span>
        <div className='flex-auto mr-24 -mt-4 border-t-4 transition duration-500 ease-in-out border-torch-red' />
        <div className='flex-auto mr-48 mt-2 mb-4 border-t-4 transition duration-500 ease-in-out border-midnight-express' />
      </Title>
    </Grid>
  )
}