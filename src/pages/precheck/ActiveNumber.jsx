import React, { Fragment } from 'react'
import useAppStateContext from '../../hooks/useAppStateContext'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import Title from '../../components/Title';
import styles from '../pages.module.scss'

export default function ActiveNumber() {
  const { path } = useAppStateContext()
  const onChange = event => (path.value = event.target.value)

  return (
    <Fragment>
      <Title label="Active Telephone Number" />
      <div className={styles.card}>
        <span className={styles.section}>
          In order to be eligible for porting, a telephone number must be associated with a currently active line of voice service.
        </span>
        <span className={styles.section}>  
          Lines that have already been cancelled or are pending cancellation cannot be ported in or out of a network.
        </span>
        <span className={`${styles.question} ${styles.section}`}>
          Does the customer confirm that the requested number is associated with an active line of service from his/her current provider?
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
    </Fragment>
  )
}