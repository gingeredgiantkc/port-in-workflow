import React, { Fragment } from 'react'
import { FormControlLabel, FormControl, Radio, RadioGroup } from '@mui/material'
import useAppStateContext from '../../hooks/useAppStateContext'
import Title from '../../components/Title'
import styles from '../pages.module.scss'

export default function CheckPortability() {
  const { path } = useAppStateContext()
  const onChange = event => (path.value = event.target.value)
  return (
    <Fragment>
      <Title label="Check Portability" />
      <div className={styles.card}>
        <span className={styles.section}>
          TIP: Make note of the services the customer currently has with Frontier and their plans/tiers so that you have them later when writing the order.
        </span>
        <span className={styles.section}>
          Next, use {"   "}
            <a className={styles.hyperlink} href='https://cfapps.ftr.com/cert/main.cfm' target='_blank' rel='noopener noreferrer'>                   
              CERT
            </a>
          {"   "} to check if the desired telephone number can be ported into the exchange where the subscriber resides by using 
        </span>
        <span className={styles.section}>
          Grab the first six (6) digits of the Billing Telephone Number or an eligible NPA/NXX from <span className="bold">Exchange Information</span> in CERT. Then, click Options {'>'} NPA/NXX Lookup, and use the tool at the bottom of the screen to determine if the telephone number is portable.
        </span>
        <span className={`${styles.question} ${styles.section}`}>
          Can the phone number be ported from the customer's current provider to Frontier?
        </span>
        <FormControl
          sx={{
            '& .MuiFormControl-root': {
              fontFamily: 'PP Object Sans',
              fontWeight: 'medium',
              paddingY: 0,
              marginY: 0,
              textAlign: 'justify',
            },
            '& .MuiFormControlLabel-label': {
              fontSize: '1rem',
              fontFamily: 'PP Object Sans',
              marginY: 0.5,
              marginLeft: 0.5,
            },
            marginX: 1,
            marginY: 0,
            flexDirection: 'row'
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
              value='/active-number'
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
              value='/ending-not-portable'
            />
          </RadioGroup>
        </FormControl>
      </div>
    </Fragment>
  )
}