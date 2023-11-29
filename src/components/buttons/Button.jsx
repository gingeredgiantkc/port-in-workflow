import * as React from 'react'
import styles from './Button.module.scss'

export default function Button({ onClick, type, children }) {
  return (
    <button className={styles.pushable} onClick={onClick}>
      <span className={styles.shadow} />
      <span className={`${styles.edge} ${styles[type]}`} />
      <span className={`${styles.front} ${styles[type]}`}>
        {children}
      </span>
    </button>
  )
}
