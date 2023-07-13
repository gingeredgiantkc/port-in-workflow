import React, { Fragment, useEffect } from 'react'
import useAppStateContext from '../hooks/useAppStateContext'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import Title from '../components/Title';
import { useLocation } from 'react-router-dom';

export default function ProviderInfo() {
  const { value, setValue, setPath } = useAppStateContext()
  let location = useLocation()
  
  useEffect(function() {
    const timeout = setTimeout(function() {
      setPath(location.pathname + '/' + value)
    }, 1000)
    return function() {
      clearTimeout(timeout)
    }
  }, [value])

  return (
    <Fragment>
      <Title label="Provider Info" />
      <div className='row-start-2 col-start-3 col-end-13 row-span-4'>
        <div className='grid grid-cols-12 grid-rows-6'>
          <div className='col-start-1 col-end-9 row-span-5 text-white font-medium ml-4 mt-4'>
            An account number and PIN/password are required for porting telephone numbers. Confirm that the customer has the account number and PIN/password from the current provider.<br /><br />
            <i>Is the customer able to provide you with this information?</i><br />
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
                  value='precheck-confirm'
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
                  value='ending-no-info'
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </div>
    </Fragment>
  )
}