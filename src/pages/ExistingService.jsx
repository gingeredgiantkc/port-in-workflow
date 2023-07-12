import React, { Fragment } from 'react'
import { FormControlLabel, FormControl, Radio, RadioGroup } from '@mui/material'
import useAppStateContext from '../hooks/useAppStateContext'
import Title from '../components/Title'

export default function ExistingService() {
  const { value, setValue } = useAppStateContext()

  return (
    <Fragment>
      <Title label="Current Service(s)" />
      <div className='row-start-2 col-start-3 col-end-13 row-span-4'>
        <div className='grid grid-cols-12 grid-rows-6'>
          <div className='col-start-1 col-end-9 row-span-5 text-white font-medium ml-4 mt-4'>
            Residential CARE Account Services specialists only process a port-in/winback when: <br /><br />
            1. The customer is wanting to establish a new voice-only account, OR <br />
            2. The customer already has an active account or pending service order to establish service(s). <br /><br />
            Use The HUB, DPI, and other tools to search for any currently active accounts and/or pending orders. <br /><br />
            <i>Does the customer have an existing account/order, and is the customer establishing a voice-only account?</i>
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
                  label='No, the customer does not have an existing account/order and wants to install a voice service only.'
                  value='provider-info'
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
                  label='No, the customer does not have an existing account/order and wants to install new data and voice service.'
                  value='ending-transfer'
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
                  label='Yes, the customer has an existing account/order.'
                  value='check-portability'
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </div>
    </Fragment>
  )
}