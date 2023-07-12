import React from 'react'
import useAppStateContext from '../hooks/useAppStateContext'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

export default function CheckPortability() {
  const { value, setValue } = useAppStateContext()

  return (
    <div>
              <div className='text-midnight-express m-0 p-0 place-self-start text-start'>
                Check Portability
              </div>
              <div className='flex-auto mr-12 -mt-4 border-t-4 transition duration-500 ease-in-out border-torch-red' />
              <div className='flex-auto mr-24 mt-2 border-t-4 transition duration-500 ease-in-out border-midnight-express' />
              TIP: Make note of the services the customer currently has with Frontier and their plans/tiers so that you have them later when writing the order.<br /><br />
              Take a moment to check if the telephone number can be ported into the customer's exchange.<br /><br />
              Open <a href='https://cfapps.ftr.com/cert/main.cfm' target='_blank' rel='noopener noreferrer'>CERT</a> and click Options {'>'} NPA/NXX Lookup, and use the tool at the bottom of the screen to determine if the telephone number can be ported-in.<br /><br />
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
                    value='provider-info'
                  />
                  <FormControlLabel
                    control={<Radio size='small' />}
                    label='No'
                    value='ending-not-portable'
                  />
                </RadioGroup>
              </FormControl>
    </div>
  )
}