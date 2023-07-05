import React from 'react'
import Grid, { Body, Title } from '../components/Grid'
import useAppStateContext from '../hooks/useAppStateContext'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

export default function ProviderInfo() {
  const { value, setValue } = useAppStateContext()
  console.log({ value });
  return (
    <Grid
      sx={{
        gridTemplateColumns: 'repeat(13, 1fr)',
        gridTemplateRows: 'repeat(8, 0.5fr)'
      }}
    >
      <Title
        sx={{
          gridColumn: '2 / 11',
          gridRow: '1 / 3',
          alignSelf: 'start',
          fontSize: '3.5rem',
        }}
      >
        <span className='text-midnight-express py-0'>
          Provider Info
        </span>
        <div className='flex-auto mr-12 -mt-4 py-0 border-t-4 transition duration-500 ease-in-out border-torch-red' />
        <div className='flex-auto mr-36 mt-2 border-t-4 transition duration-500 ease-in-out border-midnight-express' />
      </Title>
      <Body
        sx={{
          gridRow: '3 / span 2',
          gridColumn: '2 / 10',
          alignSelf: 'end',
          fontWeight: 'medium'
        }}
      >
        An account number and PIN/password are required for porting telephone numbers. Confirm that the customer has the account number and PIN/password from the current provider.<br /><br />
      </Body>
      <Body
        sx={{
          gridRow: '5',
          gridColumn: '2 / 11',
          alignSelf: 'flex-end',
        }}
      >
        <i>Is the customer able to provide you with this information?</i>
        <br />
      </Body>
      <Body
        sx={{
          gridRow: '6 / span 2',
          gridColumn: '2 / 11',
          alignSelf: 'center',
        }}
      >
        <FormControl
          sx={{
            '& .MuiFormControlLabel-label': {
              fontSize: '0.85rem',
              flexGrow: 1,
              paddingTop: 0.5,
              m: 0,
            },
          }}
        >
          <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
            <FormControlLabel
              control={<Radio size='small' />}
              label='Yes'
              value='precheck-confirm'
            />
            <FormControlLabel
              control={<Radio size='small' />}
              label='No'
              value='ending-no-info'
            />
          </RadioGroup>
        </FormControl>
      </Body>
    </Grid>
  )
}