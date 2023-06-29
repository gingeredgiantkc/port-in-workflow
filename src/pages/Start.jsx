import React from 'react'
import { FormControlLabel, RadioGroup, Radio, FormControl } from '@mui/material'
import useAppStateContext from '../hooks/useAppStateContext'
import Grid, { Body, Title } from '../components/Grid'

export default function Home() {
  const { value, setValue } = useAppStateContext()
  console.log({ value });

  return (
    <Grid sx={{ gridTemplateColumns: 'repeat(13, 1fr)', gridTemplateRows: 'repeat(8, 1fr)' }}>
      <Title sx={{ gridColumn: 'span 13', alignSelf: 'flex-end', fontSize: '4rem' }}>Start</Title>
      <Body sx={{ gridColumn: '4 / 11', gridRow: '3 / 4' }}>
        Does the customer have an existing account, or is the customer establishing a voice-only account?
      </Body>
      <Body sx={{ gridColumn: '4 / 11', gridRow: '5 / span 3' }}>
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
          <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
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