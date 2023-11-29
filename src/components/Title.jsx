import React from 'react'
import styles from './Title.module.scss'

export default function Title({ label }) {
  return (
    <hgroup className={styles.header}>
      <header className={styles.title}>{label}</header>
    </hgroup>
  )
}