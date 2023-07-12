import React from 'react'

export default function PrecheckConfirm() {

  return (
    <div>
      <span className='text-midnight-express py-0'>
          Pre-Check Complete
      </span>
      <div className='flex-auto mr-12 -mt-4 py-0 border-t-4 transition duration-500 ease-in-out border-torch-red' />
      <div className='flex-auto mr-36 mt-2 border-t-4 transition duration-500 ease-in-out border-midnight-express' />
      Everything looks good!
      Now that you've pre-checked the portability of the customer's telephone number, use the process outlined in the F[ONE] article <a href='https://kb.ftr.com/Pages/PI-WT---Port-In---Order-Entry.aspx' target='_blank' rel='noopener noreferrer'>PI/WT - Port In Order Entry</a> to complete the order.
    </div>
  )
}