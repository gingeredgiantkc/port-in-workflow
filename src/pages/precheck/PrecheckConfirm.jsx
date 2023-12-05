import { Fragment, useEffect } from 'react'
import Title from '../../components/Title'
import useAppStateContext from '../../hooks/useAppStateContext'
import styles from '../pages.module.scss'

export default function PrecheckConfirm() {
  const { setPath } = useAppStateContext()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPath("/workflow")
    }, 500)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <Fragment>
      <Title label="Ready to Port" />
      <div className={styles.card}>
        <span className={styles.section}>
          Everything looks good!
        </span>
        <span className={styles.section}>
          Now that you've pre-checked the portability of the customer's telephone number, use the steps outlined in the F[ONE] article <a className={styles.hyperlink} href='https://kb.ftr.com/Pages/PI-WT---Port-In---Order-Entry.aspx' target='_blank' rel='noopener noreferrer'>PI/WT - Port In Order Entry</a> to complete the order.
        </span>
      </div>
    </Fragment>
  )
}