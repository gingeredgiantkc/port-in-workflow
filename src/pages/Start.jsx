import React, { Fragment, useState } from 'react'
import { Button, FormControlLabel, RadioGroup, Radio, FormControl } from '@mui/material'
import useAppStateContext from '../hooks/useAppStateContext'

const Start = () => {
  const { newPage, setNewPage, currentPage, setCurrentPage } = useAppStateContext()
  const [selectedValue, setSelectedValue] = useState('option1')

  const handleClick = () => {
    setCurrentPage(newPage);
    if (selectedValue === 'option1') {
      setNewPage(10)
    } else if (selectedValue == 'option2') {
      setNewPage(20)
    } else {
      setNewPage(30)
    };
    console.log("currentPage", currentPage);
    console.log("newPage", newPage);
  }

  return (
    <Fragment>
      <div className='grid grid-cols-custom grid-rows-custom gap-2 mx-auto'>
        <div className='col-span-full text-center place-self-center text-2xl font-bold text-gray-700'>
          Start
          <div className='text-lg font-semibold text-gray-500'>
            Subtitle
          </div>
        </div>
        <div className='row-start-3 col-start-3 col-span-6 text-justify text-base font-medium text-gray-600'>
          Enter body here.
        </div>
        <div className='row-start-4 row-span-2 col-start-3 col-span-6'>
          <FormControl>
            <RadioGroup value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
              <FormControlLabel
                control={<Radio />}
                label='Option 1'
                value='option1'
              />
              <FormControlLabel
                control={<Radio />}
                label='Option 2'
                value='option2'
              />
              <FormControlLabel
                control={<Radio />}
                label='Option 3'
                value='option3'
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className='row-start-6 col-span-full place-self-end px-2'>
          <Button
            variant='contained'
            onClick={handleClick}
            color='success'
          >
            Next
          </Button>
        </div>
      </div>
    </Fragment>
  )
}

export default Start