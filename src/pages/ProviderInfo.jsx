import React from 'react'
import useAppStateContext from '../hooks/useAppStateContext'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

export default function ProviderInfo() {
  return (
  <div>
    <span className='text-midnight-express py-0'>
          Provider Info
    </span>
    <div className='flex-auto mr-12 -mt-4 py-0 border-t-4 transition duration-500 ease-in-out border-torch-red' />
        <div className='flex-auto mr-36 mt-2 border-t-4 transition duration-500 ease-in-out border-midnight-express' />
        An account number and PIN/password are required for porting telephone numbers. Confirm that the customer has the account number and PIN/password from the current provider.<br /><br />
        <i>Is the customer able to provide you with this information?</i>
        <br />
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
    </div>
  )
}