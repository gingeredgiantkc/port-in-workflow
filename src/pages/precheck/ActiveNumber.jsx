import React, { Fragment } from 'react'
import useAppStateContext from '../../hooks/useAppStateContext'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import Title from '../../components/Title';

export default function ActiveNumber() {
  const { value, setValue } = useAppStateContext()
  
  return (
    <Fragment>
      <div className='body-text lg-list'>
        <p className='paragraph'>
          In order to be eligible for porting, a telephone number must be associated with a currently active line of voice service.
          <br />  
          Lines that have already been cancelled or are pending cancellation cannot be ported in or out of a network.
          <br />
          Does the customer confirm that the requested number is associated with an active line of service from his/her current provider?
        </p>
        <FormControl
          sx={{
            '& .MuiFormControlLabel-label': {
              fontFamily: 'PP Object Sans Regular',
              fontSize: '16px',
              fontWeight: 'medium',
              flexGrow: 1,
              textAlign: 'justify',
            },
            marginLeft: 2,
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
              label='Yes'
              value='/provider-info'
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
              label='No'
              value='/ending-inactive'
            />
          </RadioGroup>
        </FormControl>
      </div>
      <Title label="Active Telephone Number" />
    </Fragment>
  )
}