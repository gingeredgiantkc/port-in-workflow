import React, { Fragment } from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled'
import Title from '../components/Title'

export default function Home() {
  return (
    <Fragment>
      <Title label="Port-In Eligibility Tool" />
      <div className='row-start-2 col-start-3 col-end-13 row-span-4'>
        <div className='grid grid-cols-12 grid-rows-6'>
          <div className='col-start-1 col-end-9 row-span-5'>
            <div className='flex flex-col flex-wrap text-white font-medium ml-4 mt-4'>
              <p className='my-2 ml-2'>
                This tool can be used by agents to help determine if a telephone number is eligible to be ported-in from a competitor's network to Frontier.
              </p>
              <p className='my-2 ml-2'>Agents can...</p>
              <p className='my-2 ml-2'>
                ...navigate to the next step using the {"   "}
                  <span className='inline-flex'>
                    <ArrowCircleRightIcon color="primary" />
                  </span>
                {"   "} button,
              </p>
              <p className='my-2 ml-2'>
                ...start from the beginning by clicking {"   "}
                <span className='inline-flex'>
                  <ReplayCircleFilledIcon color="primary" />
                </span>
                {"   "} ,
              </p>
              <p className='my-2 ml-2'>
                ...and revisit previous steps with the links in the left panel.
              </p>
              <p className='my-2 ml-2'>
                Click {"   "}
                <span className='inline-flex'>
                  <ArrowCircleRightIcon color='primary' />
                </span>
                {"   "} to begin!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}