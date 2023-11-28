import { Fragment, useEffect } from 'react'
import Title from '../../components/Title';
import useAppStateContext from '../../hooks/useAppStateContext';

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
      <div className="body-text">
        <p className="paragraph">
          Everything looks good!
        </p>
        <p className="paragraph">
          Now that you've pre-checked the portability of the customer's telephone number, use the steps outlined in the F[ONE] article <a className="article" href='https://kb.ftr.com/Pages/PI-WT---Port-In---Order-Entry.aspx' target='_blank' rel='noopener noreferrer'>PI/WT - Port In Order Entry</a> to complete the order.
        </p>
      </div>
      <Title label="Ready to Port" />
    </Fragment>
  )
}