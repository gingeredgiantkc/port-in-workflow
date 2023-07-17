import React, { Fragment } from 'react'
import useAppStateContext from '../hooks/useAppStateContext'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import Title from '../components/Title';

export default function ProviderInfo() {
  const { value, setValue } = useAppStateContext()
  
  return (
    <Fragment>
      <Title label="Provider Info" />
      <div className='row-start-2 col-start-3 col-end-13 row-span-4'>
        <div className='grid grid-cols-12 grid-rows-6'>
          <div className='col-start-1 col-end-9 row-span-5'>
            <div className='flex flex-col flex-wrap text-white font-medium ml-4 mt-4'>
              <p className='my-2 ml-2'>
                An account number and PIN/password are required for porting telephone numbers.
              </p>
              <p className='my-2 ml-2'>
                Confirm that the customer has the account number and PIN/password from the current provider.
              </p>
              <p className='my-2 ml-2 italic'>
                Is the customer able to provide you with this information?
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
                    value='/precheck-confirm'
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
                    value='/ending-no-info'
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