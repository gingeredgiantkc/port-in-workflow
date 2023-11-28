import React, { Fragment } from 'react'
import { FormControlLabel, FormControl, Radio, RadioGroup } from '@mui/material'
import useAppStateContext from '../../hooks/useAppStateContext'
import Title from '../../components/Title'

export default function ExistingService() {
  const { value, setValue } = useAppStateContext()
  
  return (
    <Fragment>
      <Title label="Current Services" />
      <div className="card">
        <section className="intro">
          Residential CARE Account Services specialists only process a port-in/winback when:
        </section>
        <section className="info">
          1. The customer is wanting to establish a new voice-only account, {' '}
          <span className='font-bold underline'>OR{' '}</span>
          <br />
          2. The customer already has an active account or pending service order to establish service(s).
        </section>
        <section className="outro">
          Use The HUB, DPI, and other tools to search for any currently active accounts and/or pending orders.
        </section>
        <section className="question">
          Does the customer have an active account or pending install order, and does the customer wish to open a new voice-only account?
        </section>
        <FormControl
          sx={{
            '& .MuiFormControlLabel-label': {
              fontFamily: 'PP Object Sans Regular',
              fontSize: '1rem',
              fontWeight: 'medium',
              paddingTop: 0,
              marginY: '0.25rem',
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
                    color: '#05122d',
                    '&.Mui-checked': {
                      color: '#05122d',
                    },
                  }}
                />
              }
              label='No, the customer does not have an existing account or pending install order and wants to open a new voice-only account.'
              value='/active-number'
            />
            <FormControlLabel
              sx={{ fontSize: '12px' }}
              control={
                <Radio
                  size='small' 
                  sx={{
                    color: '#05122d',
                    '&.Mui-checked': {
                      color: '#05122d',
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
                    color: '#05122d',
                    '&.Mui-checked': {
                      color: '#05122d',
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
    </Fragment>

 /* <Title label="Current Services" />
      <div className='row-start-2 col-start-3 col-end-13 row-span-4'>
        <div className='flex flex-col flex-wrap text-white font-medium ml-4 mt-4'>
        </div>
      </div>
    </Fragment>  */
  )
}