import React, { Fragment } from 'react'
import useAppStateContext from '../../hooks/useAppStateContext'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import Title from '../../components/Title';

export default function ProviderInfo() {
  const { value, setValue } = useAppStateContext()
  
  return (
    <Fragment>
      <div className="body-text">
        <p className="paragraph">
          An account number and PIN/password are required for porting telephone numbers.
        </p>
        <p className="paragraph">
          Confirm that the customer has the account number and PIN/password from the current provider.
        </p>
        <p className="question">
          Is the customer able to provide you with this information?
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
              value='/precheck-confirm'
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
              value='/ending-no-info'
            />
          </RadioGroup>
        </FormControl>
      </div>
      <Title label="Provider Info" />
    </Fragment>
  )
}