import React from 'react'
import Grid, { Body, Title } from '../../../components/Grid'
import useAppStateContext from '../../../hooks/useAppStateContext'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

export default function AcctVoip() {
  const { value, setValue } = useAppStateContext()
  console.log(value)

  return (
    <Grid
      sx={{
        gridTemplateColumns: 'repeat(13, 1fr)',
        gridTemplateRows: 'repeat(8, 0.5fr)',
      }}
    >
      <Title
        sx={{
          gridColumn: '2 / 11',
          alignSelf: 'flex-start',
          fontSize: '3.5rem',
          gridRow: '1 / span 2',
          margin: 0,
        }}
      >
        <div className='text-midnight-express m-0 p-0 place-self-start text-start'>
          Check Portability
        </div>
        <div className='flex-auto mr-12 -mt-4 border-t-4 transition duration-500 ease-in-out border-torch-red' />
        <div className='flex-auto mr-24 mt-2 border-t-4 transition duration-500 ease-in-out border-midnight-express' />
      </Title>
      <Body
        sx={{
          gridColumn: '2 / 11',
          gridRow: '3 / span 4',
          flexGrow: 1,
          textAlign: 'justify',
          alignSelf: 'start',
          fontWeight: 'medium',
        }}
      >
        TIP: Make note of the services the customer currently has with Frontier so that you have later when writing the order.<br /><br />
        Take a moment to check if the telephone number can be ported into the customer's exchange.<br /><br />
        Open <a href='https://cfapps.ftr.com/cert/main.cfm' target='_blank' rel='noopener noreferrer'>CERT</a> and click Options {'>'} NPA/NXX Lookup, and use the tool at the bottom of the screen to determine if the telephone number can be ported-in.<br /><br />
      </Body>
      <Body
        sx={{
          gridColumn: '2 / 11',
          gridRow: '7 / span 2'
        }}
      >
        <i>Can the phone number be ported from the customer's current provider to Frontier?</i>
        <br />
        <FormControl
          sx={{
            '& .MuiFormControlLabel-label': {
              fontSize: '0.85rem',
              flexGrow: 1,
              m: 0,
              paddingTop: 0.5,
            },
          }}
        >
          <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
            <FormControlLabel
              control={<Radio size='small' />}
              label='Yes'
              value='portable'
            />
            <FormControlLabel
              control={<Radio size='small' />}
              label='No'
              value='/end/non-portable'
            />
          </RadioGroup>
        </FormControl>
      </Body>
    </Grid>
  )
}