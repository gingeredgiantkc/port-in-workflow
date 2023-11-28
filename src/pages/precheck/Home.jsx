import React, { Fragment } from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled'
import Title from '../../components/Title'

export default function Home() {
  return (
    <Fragment>
      <Title label="Port-In Eligibility Tool" />
      <div className='card'>
        <section className='intro'>
          This tool can be used by agents to help determine if a telephone number is eligible to be ported-in from a competitor's network to Frontier.
        </section>
        <section className='info'>
          <p className='section-break question'>
            Agents can...
          </p>
          <p className='section-break'>
            ...navigate to the next step using the {"   "}
            <span className='inline-flex'>
              <ArrowCircleRightIcon color="#05122d" />
            </span>
            {"   "} button,
          </p>
          <p className='section-break'>
            ... revisit previous steps with the {"   "}
            <span className='inline-flex'>
              <ArrowCircleLeftIcon color="#05122d" />
            </span>
            {"   "} button,
          </p>
          <p className='section-break'>
            ...start from the beginning by clicking {"   "}
            <span className='inline-flex'>
              <ReplayCircleFilledIcon color="#05122d" />
            </span>
            {"   "} ,
          </p>
          <p className='section-break'>
            ...and quickly access tools and resources using the {"   "}
            <span className='inline-flex'>
              <ReplayCircleFilledIcon color="#05122d" />
            </span>
            {"   "} button.
          </p>
        </section>
        <section className='outro'>
          Click {"   "}
          <span className='inline-flex'>
            <ArrowCircleRightIcon color='#05122d' />
          </span>
          {"   "} to begin!
        </section>
      </div>
    </Fragment>
  )
}