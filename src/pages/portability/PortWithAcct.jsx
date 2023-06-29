import React from 'react'
import Grid, { Body, Title } from '../../components/Grid'
import useAppStateContext from '../../hooks/useAppStateContext'
import { Box, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function PortWithAcct() {
  const { value, setValue } = useAppStateContext()
  console.log(value)

  return (
    <Grid sx={{ gridTemplateColumns: 'repeat(13, 1fr)', gridTemplateRows: 'repeat(5, 1fr)' }}>
      <Title sx={{ gridColumn: 'span 13', textAlign: 'center', alignSelf: 'center' }}>Portability</Title>
      <Body sx={{ gridColumn: '4 / 11', gridRow: '2', flexGrow: 1, textAlign: 'justify', alignSelf: 'center' }}>
        Make note of the services the customer currently has with Frontier. We'll need those later.
      </Body>
      <Body sx={{ gridColumn: '4 / 11', gridRow: '3', flexGrow: 1, textAlign: 'justify' }}>
        Open <a href='https://cfapps.ftr.com/cert/main.cfm' target='_blank' rel='noopener noreferrer'>CERT</a> and click Options {'>'} NPA/NXX Lookup, and use the Portability tool to determine if the telephone number can be ported-in.
        Can the phone number be ported from the customer's current provider to the Frontier?
      </Body>
      <Body sx={{ gridColumn: '4', gridRow: '4' }}>
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
              value='/precheck/portable'
            />
            <FormControlLabel
              control={<Radio size='small' />}
              label='No'
              value='/precheck/non-portable'
            />
          </RadioGroup>
        </FormControl>
      </Body>
    </Grid>
  )
}

export default PortWithAcct