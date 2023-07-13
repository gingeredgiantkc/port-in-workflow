import React, { Fragment } from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled'
import Title from '../components/Title'

export default function Home() {
  return (
    <Fragment>
      <Title label="Port-In Eligibility Check" />
      <div className='row-start-2 col-start-3 col-end-13 row-span-4'>
        <div className='grid grid-cols-12 grid-rows-6'>
          <div className='col-start-1 col-end-9 row-span-5 text-white text-xl font-medium ml-4 mt-4'>
            This tool can be used by agents to help determine if a telephone<br />
            number is eligible to be ported-in from a competitor's network<br />
            to Frontier. <br /><br />
            
            Agents can...<br /><br />
            
            ...navigate to the next step using the <ArrowCircleRightIcon color="primary" /> button,<br /><br />
            
            ...start from the beginning by clicking <ReplayCircleFilledIcon color="primary" />,<br /><br />
            
            ...and revisit previous steps with the links in the left panel.<br /><br />

            Click <ArrowCircleRightIcon color='primary' /> to begin!
          </div>
        </div>
      </div>
    </Fragment>
  )
}