import React, { Fragment, useEffect } from 'react'
import { FormControlLabel, FormControl, Radio, RadioGroup } from '@mui/material'
import useAppStateContext from '../hooks/useAppStateContext'
import Title from '../components/Title'
import { useLocation } from 'react-router-dom'

export default function CheckPortability() {
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
      <Title label="Current Service(s)" />
      <div className='row-start-2 col-start-3 col-end-13 row-span-4'>
        <div className='grid grid-cols-12 grid-rows-6'>
          <div className='col-start-1 col-end-9 row-span-5 text-white font-medium ml-4 mt-4'>
            TIP: Make note of the services the customer currently has with Frontier and their plans/tiers so that you have them later when writing the order.<br /><br />
            Take a moment to check if the telephone number can be ported into the customer's exchange.<br /><br />
            Open <a href='https://cfapps.ftr.com/cert/main.cfm' target='_blank' rel='noopener noreferrer'>CERT</a> and click Options {'>'} NPA/NXX Lookup, and use the tool at the bottom of the screen to determine if the telephone number can be ported-in.<br /><br />
            <i>Can the phone number be ported from the customer's current provider to Frontier?</i><br />
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
                  label='No'
                  value='ending-not-portable'
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </div>
    </Fragment>
  )
}