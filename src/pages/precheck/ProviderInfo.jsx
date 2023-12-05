import React, { Fragment } from 'react'
import useAppStateContext from '../../hooks/useAppStateContext'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import Title from '../../components/Title'
import styles from '../pages.module.scss'

export default function ProviderInfo() {
  const { path } = useAppStateContext()
  const onChange = event => (path.value = event.target.value)
  
  return (
    <Fragment>
      <Title label="Provider Info" />
      <div className={styles.card}>
        <span className={styles.section}>
          An account number and PIN/password are required for porting telephone numbers.
        </span>
        <span className={styles.section}>
          Confirm that the customer has the account number and PIN/password from the current provider.
        </span>
        <span className={`${styles.section} ${styles.question}`}>
          Is the customer able to provide you with this information?
        </span>
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
          <RadioGroup value={path.value} onChange={onChange}>
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
    </Fragment>
  )
}