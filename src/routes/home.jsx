import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FormControlLabel, RadioGroup, Radio, FormControl, Button } from '@mui/material'

export default function Home() {
  const [selectedValue, setSelectedValue] = useState('option1')
  const handleNextPage = () => {
    let nextPage = '1';
    if (selectedValue === 'option1') {
      nextPage === '1'
    } else if (selectedValue === 'option2') {
      nextPage === '2'
    } else if (selectedValue === 'option3') {
      nextPage === '3'
    } else {
      nextPage === '4'
    };
  }

  console.log({ selectedValue });

  return (
    <Fragment>
      <div className='grid grid-cols-8 grid-rows-6'>
        <div className='row-start-1 col-span-full text-center place-self-center text-[32px] font-bold text-gray-800 font-midpoint'>
          Start
          <div className='text-lg text-center font-semibold text-gray-700 font-midpoint'>
            Subtitle
          </div>
        </div>    
        <div className='row-start-2 col-start-3 col-span-4 text-justify text-base font-medium text-gray-700 font-midpoint'>
          Does the customer have any existing account, or is the customer establishing a voice-only account?
        </div>
        <div className='row-start-3 col-start-3 col-span-4 row-span-3 text-justify text-base font-medium text-gray-700 font-midpoint'>
          <FormControl
            sx={{
              '& .MuiFormControlLabel-label': {
                fontSize: 12,
                fontFamily: 'MidpointPro',
                flexGrow: 1,
                paddingTop: 2,
              },
            }}
          >
            <RadioGroup value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
              <FormControlLabel
                control={<Radio size='small' />}
                label='No, the customer does not have an existing account, and yes, the customer is establishing a voice-only account.'
                value='option1'
              />
              <FormControlLabel
                control={<Radio size='small' />}
                label='No, the customer does not have an existing account, and no, the customer is not establishing a voice-only account.'
                value='option2'
              />
              <FormControlLabel
                control={<Radio size='small' />}
                label='Yes, the customer has an existing account, and yes, the customer is establishing a voice-only account.'
                value='option3'
              />
              <FormControlLabel
                control={<Radio size='small' />}
                label='Yes, the customer has an existing account, and no, the customer is not establishing a voice-only account.'
                value='option4'
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className='row-start-6 col-start-5 place-self-end'>
          <Button
            variant='contained'
            component={NavLink}
            to={handleNextPage}
            color='success'
          >
            Next
          </Button>
        </div>
      </div>
    </Fragment>
  )
}