import React from 'react'
import { FormControlLabel, FormControl, Radio, RadioGroup } from '@mui/material'
import useAppStateContext from '../hooks/useAppStateContext'
import Grid, { Body, Title } from '../components/Grid'

export default function ExistingService() {
  const { value, setValue } = useAppStateContext()
  console.log({ value });


  return (
    <Grid
      sx={{
        gridTemplateColumns: 'repeat(13, 1fr)',
        gridTemplateRows: 'repeat(6, 0.5fr)',
      }}
    >
      <Title
        sx={{
          gridColumn: '2 / 11',
          alignSelf: 'flex-start',
          fontSize: '3.5rem',
          gridRow: '1 / 2'
        }}
      >
        <span className='text-midnight-express'>
          Current Service(s)
        </span>
        <div className='flex-auto mr-12 -mt-4 border-t-4 transition duration-500 ease-in-out border-torch-red' />
        <div className='flex-auto mr-24 mt-2 border-t-4 transition duration-500 ease-in-out border-midnight-express' />
      </Title>
      <Body
        sx={{
          gridColumn: '2 / 11',
          gridRow: '2 / 4',
          alignSelf: 'start',
          fontWeight: 'medium',
        }}
      >
        Residential CARE Account Services specialists only process a port-in/winback when: <br /><br />
        1. The customer is wanting to establish a new voice-only account, OR <br />
        2. The customer already has an active account or pending service order to establish service(s). <br /><br />
        Use The HUB, DPI, and other tools to search for any currently active accounts and/or pending orders. <br /><br />
      </Body>
      <Body
        sx={{
          gridColumn: '2 / 10',
          gridRow: '4 / 7',
          alignSelf: 'flex-start',
        }}
      >
        <i>Does the customer have an existing account/order, and is the customer establishing a voice-only account?</i>
        <FormControl
          sx={{
            '& .MuiFormControlLabel-label': {
              fontSize: '0.9rem',
              fontWeight: 'medium',
              flexGrow: 1,
              paddingTop: 2.5,
              paddingBottom: 0,
            },
          }}
        >
          <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
            <FormControlLabel
              control={<Radio size='small' />}
              label='No, the customer does not have an existing account/order and wants to install a voice service only.'
              value='provider-info'
            />
            <FormControlLabel
              control={<Radio size='small' />}
              label='No, the customer does not have an existing account/order and wants to install new data and voice service.'
              value='ending-transfer'
            />
            <FormControlLabel
              control={<Radio size='small' />}
              label='Yes, the customer has an existing account/order.'
              value='check-portability'
            />
          </RadioGroup>
        </FormControl>
      </Body>
    </Grid>
  )
}