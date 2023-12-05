import React, { Fragment } from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled'
import Title from '../../components/Title'
import styles from '../pages.module.scss'

export default function Home() {
  return (
    <Fragment>
      <Title label="Port-In Eligibility Tool" />
      <div className={styles.card}>
        <span className={styles.section}>
          This tool can be used by agents to help determine if a telephone number is eligible to be ported-in from a competitor's network to Frontier.
        </span>
        <span className={styles.section}>
          Agents can...
        </span>
        <span className={styles.section}>
          ...navigate to the next step using the {"   "}
          <span className='inline-flex'>
            <ArrowCircleRightIcon color="#05122d" />
          </span>
          {"   "} button,
        </span>
        <span className={styles.section}>
          ... revisit previous steps with the {"   "}
          <span className='inline-flex'>
            <ArrowCircleLeftIcon color="#05122d" />
          </span>
          {"   "} button,
        </span>
        <span className={styles.section}>
          ...start from the beginning by clicking {"   "}
          <span className='inline-flex'>
            <ReplayCircleFilledIcon color="#05122d" />
          </span>
          {"   "} ,
        </span>
        <span className={styles.section}>
          ...and quickly access tools and resources using the {"   "}
          <span className='inline-flex'>
            <ReplayCircleFilledIcon color="#05122d" />
          </span>
          {"   "} button.
        </span>
        <span className={styles.section}>
          Click {"   "}
          <span className='inline-flex'>
            <ArrowCircleRightIcon color='#05122d' />
          </span>
          {"   "} to begin!
        </span>
      </div>
    </Fragment>
  )
}