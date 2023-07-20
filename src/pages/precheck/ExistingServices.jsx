import React, { Fragment } from 'react'
import { FormControlLabel, FormControl, Radio, RadioGroup } from '@mui/material'
import useAppStateContext from '../../hooks/useAppStateContext'
import Title from '../../components/Title'

export default function ExistingService() {
  const { value, setValue } = useAppStateContext()

  return (
    <Fragment>
      <Title label="Current Services" />
      <div className='row-start-2 col-start-3 col-end-13 row-span-4'>
        <div className='flex flex-col flex-wrap text-white font-medium ml-4 mt-4'>
          <p className='my-2 ml-2 mr-8'>
            Residential CARE Account Services specialists only process a port-in/winback when:
          </p>
          <p className='my-2 ml-2 mr-8'>
            1. The customer is wanting to establish a new voice-only account,
            <p className='my-1 ml-4'>OR</p>
            2. The customer already has an active account or pending service order to establish service(s).
          </p>
          <p className='my-2 ml-2 mr-8'>
            Use The HUB, DPI, and other tools to search for any currently active accounts and/or pending orders.
          </p>
          <p className='italic my-2 ml-2 mr-8'>
            Does the customer have an existing account/order, and is the customer establishing a voice-only account?
          </p>
          <FormControl
            sx={{
              '& .MuiFormControlLabel-label': {
                fontSize: '0.9rem',
                fontWeight: 'medium',
                flexGrow: 1,
                paddingTop: 0,
                marginY: 1,
                textAlign: 'justify',
              },
              marginLeft: 2,
              marginRight: 8,
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
                label='No, the customer does not have an existing account/order and wants to install new data and voice service.'
                value='/ending-transfer'
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
                value='/check-portability'
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </Fragment>
  )
}