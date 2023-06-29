import React from 'react'
import Grid, { Body, Title } from '../../components/Grid'
import useAppStateContext from '../../hooks/useAppStateContext'
import { Box, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

function Portable() {
  const { value, setValue } = useAppStateContext()
  console.log({ value });
  return (
    <Grid sx={{ gridTemplateColumns: 'repeat(12, 1fr)', gridTemplateRows: 'repeat(4, 1fr)' }}>
      <Title sx={{ gridColumn: '4 / 10', gridRow: '1' }}>Current Provider Information</Title>
      <Body sx={{ gridRow: '2', gridColumn: '3 / 11', textAlign: 'justify', alignSelf: 'flex-end' }}>
        Now that we've confirmed which services the customer has and the portability of his/her telephone number, confirm that the customer has the account number and PIN/password from the current provider.
      </Body>
      <Body sx={{ gridRow: '3', gridColumn: '3 / 11', textAlign: 'justify', alignSelf: 'flex-end' }}>
        Is the customer able to provide you with this information?
        <br />
        <FormControl
          sx={{
            '& .MuiFormControlLabel-label': {
              fontSize: '0.85rem',
              flexGrow: 1,
              paddingTop: 0.5,
              m: 0,
            },
          }}
        >
          <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
            <FormControlLabel
              control={<Radio size='small' />}
              label='Yes'
              value='/precheck/confirm'
            />
            <FormControlLabel
              control={<Radio size='small' />}
              label='No'
              value='/precheck/end'
            />
          </RadioGroup>
        </FormControl>
      </Body>
    </Grid>
  )
}

export default Portable