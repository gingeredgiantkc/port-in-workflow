import React, { Fragment } from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled'
import Title from '../../components/Title'
import Navigation from '../../components/Navigation'

function Start() {
  return (
    <Fragment>
      <Title label="PI/WT Order Entry" />
      <div className='flex flex-col flex-wrap text-white font-medium ml-4 mt-4'>
        <p className='my-2 ml-2 mr-8'>
          This workflow will guide agents through the process of porting in a telephone number to Frontier from another provider.
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
          ...revisit previous steps with the {"   "}
            <span className='inline-flex'>
              <ArrowCircleLeftIcon color="primary" />
            </span>
          {"   "} button,
        </p>
        <p className='my-2 ml-2 mr-8'>
          ...or restart the workflow by clicking {"   "}
          <span className='inline-flex'>
            <ReplayCircleFilledIcon color="primary" />
          </span>
          {"   "} .
        </p>
        <p className='my-2 ml-2 mr-8'>
          Click {"   "}
          <span className='inline-flex'>
            <ArrowCircleRightIcon color='primary' />
          </span>
          {"   "} to begin!
        </p>
        <div className='absolute bottom-5 place-self-end'>
          <Navigation />
        </div>
      </div>
    </Fragment>
  )
}

export default Start