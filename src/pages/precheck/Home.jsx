import React, { Fragment } from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled'
import Title from '../../components/Title'

export default function Home() {
  return (
    <Fragment>
      <Title label="Port-In Eligibility Tool" />
      <div className='row-start-2 col-start-3 col-end-13 row-span-4'>

        <div className='flex flex-col flex-wrap text-white font-medium ml-4 mt-4'>
          <p className='my-2 ml-2 mr-8'>
            This tool can be used by agents to help determine if a telephone number is eligible to be ported-in from a competitor's network to Frontier.
          </p>
          <p className='my-2 ml-2 mr-8'>Agents can...</p>
          <p className='my-2 ml-2 mr-8'>
            ...navigate to the next step using the {"   "}
              <span className='inline-flex'>
                <ArrowCircleRightIcon color="primary" />
              </span>
            {"   "} button,
          </p>
          <p className='my-2 ml-2 mr-8'>
            ...start from the beginning by clicking {"   "}
            <span className='inline-flex'>
              <ReplayCircleFilledIcon color="primary" />
            </span>
            {"   "} ,
          </p>
          <p className='my-2 ml-2 mr-8'>
            ...and revisit previous steps with the links in the left panel.
          </p>
          <p className='my-2 ml-2 mr-8'>
            Click {"   "}
            <span className='inline-flex'>
              <ArrowCircleRightIcon color='primary' />
            </span>
            {"   "} to begin!
          </p>
        </div>
      </div>
    </Fragment>
  )
}