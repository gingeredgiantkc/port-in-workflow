import React, { Fragment } from 'react'
import { FormControlLabel, FormControl, Radio, RadioGroup } from '@mui/material'
import useAppStateContext from '../hooks/useAppStateContext'
import Title from '../components/Title'

export default function CheckPortability() {
  const { value, setValue } = useAppStateContext()
  
  return (
    <Fragment>
      <Title label="Check Portability" />
      <div className='row-start-2 col-start-3 col-end-13 row-span-4'>
        <div className='grid grid-cols-12 grid-rows-6'>
          <div className='col-start-1 col-end-9 row-span-5'>
            <div className='flex flex-col flex-wrap text-white font-medium ml-4 mt-4'>
              <p>
              TIP: Make note of the services the customer currently has with Frontier and their plans/tiers so that you have them later when writing the order.<br /><br />
              Take a moment to check if the telephone number can be ported into the customer's exchange.<br /><br />
              Open {"   "}
                  <a className='inline-flex' href='https://cfapps.ftr.com/cert/main.cfm' target='_blank' rel='noopener noreferrer'>                   
                    CERT
                  </a>
              {"   "} and click Options {'>'} NPA/NXX Lookup, and use the tool at the bottom of the screen to determine if the telephone number can be ported-in.
              </p>
              <br />
              <p>
              <i>Can the phone number be ported from the customer's current provider to Frontier?</i>
              </p>
              <FormControl
                sx={{
                  '& .MuiFormControlLabel-label': {
                    fontSize: '0.9rem',
                    fontWeight: 'medium',
                    flexGrow: 1,
                    paddingTop: 2,
                    paddingBottom: 1,
                    textAlign: 'justify',
                  },
                }}
              >
                <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
                  <FormControlLabel
                    control={
                      <Radio
                        size='small'
                        sx={{
                          color: '#ffffff',
                          '&.Mui-checked': {
                            color: '#ffffff',
                          },
                        }}
                      />
                    }
                    label='Yes'
                    value='/active-number'
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        size='small'
                        sx={{
                          color: '#ffffff',
                          '&.Mui-checked': {
                            color: '#ffffff',
                          },
                        }}
                      />
                    }
                    label='No'
                    value='/ending-not-portable'
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}