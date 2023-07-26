import React, { Fragment, useEffect } from 'react'
import Title from '../components/Title';
import useAppStateContext from '../hooks/useAppStateContext';

export default function PrecheckConfirm() {
  const { setPath } = useAppStateContext()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPath("/complete")
    }, 500)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <Fragment>
      <Title label="Ready to Port" />
      <div className='row-start-2 col-start-3 col-end-13 row-span-4'>
        <div className='flex flex-col flex-wrap text-white font-medium ml-4 mt-4'>
          <p className='my-2 ml-2'>
            Everything looks good!
          </p>
          <p className='my-2 ml-2 mr-8'>
            Now that you've pre-checked the portability of the customer's telephone number, use the steps outlined in the F[ONE] article <a href='https://kb.ftr.com/Pages/PI-WT---Port-In---Order-Entry.aspx' target='_blank' rel='noopener noreferrer'>PI/WT - Port In Order Entry</a> to complete the order.
          </p>
        </div>
      </div>
   </Fragment>
  )
}