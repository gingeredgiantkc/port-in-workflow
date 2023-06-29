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
    <Grid sx={{ gridTemplateColumns: 'repeat(13, 1fr)', gridTemplateRows: 'repeat(5, 1fr)' }}>
      <Title
        sx={{
          gridColumn: '2 / 14',
          alignSelf: 'flex-end',
          fontSize: '4rem',
          textAlign: 'flex-start',
        }}
      >
        <span className='text-midnight-express'>Getting Started</span>
        <div className='flex-auto mr-24 mt-0 border-t-4 transition duration-500 ease-in-out border-torch-red' />
        <div className='flex-auto mr-48 mt-2 border-t-4 transition duration-500 ease-in-out border-midnight-express' />
      </Title>
      <Body sx={{ gridColumn: '2 / 9', gridRow: '2', alignSelf: 'flex-end' }}>
        Does the customer have an existing account, or is the customer establishing a voice-only account?
      </Body>
      <Body sx={{ gridColumn: '2 / 9', gridRow: '3 / span 3', alignSelf: 'flex-start' }}>
        <FormControl
          sx={{
            '& .MuiFormControlLabel-label': {
              fontSize: '0.75rem',
              flexGrow: 1,
              paddingTop: 2,
              paddingBottom: 0,
            },
          }}
        >
          <RadioGroup value={value} onChange={handleChange}>
            <FormControlLabel
              control={<Radio size='small' />}
              label='No, the customer does not have an existing account, and yes, the customer is establishing a voice-only account.'
              value='/precheck/port-wo-acct-vo'
            />
            <FormControlLabel
              control={<Radio size='small' />}
              label='No, the customer does not have an existing account, and no, the customer is not establishing a voice-only account.'
              value='/precheck/port-wo-acct'
            />
            <FormControlLabel
              control={<Radio size='small' />}
              label='Yes, the customer has an existing account, and yes, the customer is establishing a voice-only account.'
              value='/precheck/port-w-acct-vo'
            />
            <FormControlLabel
              control={<Radio size='small' />}
              label='Yes, the customer has an existing account, and no, the customer is not establishing a voice-only account.'
              value='/precheck/port-w-acct'
            />
          </RadioGroup>
        </FormControl>
      </Body>
    </Grid>
  )
}