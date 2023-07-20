import React, { Fragment } from 'react'
import useAppStateContext from '../../hooks/useAppStateContext'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import Title from '../../components/Title';

export default function ActiveNumber() {
  const { value, setValue } = useAppStateContext()
  
  return (
    <Fragment>
      <Title label="Active Telephone Number" />
      <div className='row-start-2 col-start-3 col-end-13 row-span-4'>

        <div className='flex flex-col flex-wrap text-white font-medium ml-4 mt-4'>
          <p className='my-2 ml-2 mr-8'>
            In order to be eligible for porting, a telephone number must be associated with a currently active line of voice service.
          </p>
          <p className='my-2 ml-2 mr-8'>  
            Lines that have already been cancelled or are pending cancellation cannot be ported in or out of a network.
          </p>
          <p className='my-2 ml-2 mr-8 italic'>
            Does the customer confirm that the requested number is associated with an active line of service from his/her current provider?
          </p>
          <FormControl
            sx={{
              '& .MuiFormControlLabel-label': {
                fontSize: '0.9rem',
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
                      color: '#ffffff',
                      '&.Mui-checked': {
                        color: '#ffffff',
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
                      color: '#ffffff',
                      '&.Mui-checked': {
                        color: '#ffffff',
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
      </div>
    </Fragment>
  )
}