import React, { Fragment } from 'react'
import useAppStateContext from '../hooks/useAppStateContext'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import Title from '../components/Title';

export default function PrecheckConfirm() {

  return (
    <Fragment>
      <Title label="Pre-Check Complete" />
      <div className='row-start-2 col-start-3 col-end-13 row-span-4'>
        <div className='grid grid-cols-12 grid-rows-6'>
          <div className='col-start-1 col-end-9 row-span-5 text-white font-medium ml-4 mt-4'>
            Everything looks good!<br /><br />
            Now that you've pre-checked the portability of the customer's telephone number, use the process outlined in the F[ONE] article <a href='https://kb.ftr.com/Pages/PI-WT---Port-In---Order-Entry.aspx' target='_blank' rel='noopener noreferrer'>PI/WT - Port In Order Entry</a> to complete the order.
          </div>
        </div>
      </div>
    </Fragment>
  )
}