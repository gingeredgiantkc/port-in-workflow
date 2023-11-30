import { Fragment, useEffect, useRef } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import useAppStateContext from '../hooks/useAppStateContext'
import Modal from '../components/Modal'
import Button from '../components/buttons/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faArrowRotateLeft, faBook } from '@fortawesome/free-solid-svg-icons'
import styles from './Precheck.module.scss'

export function Precheck() {
  const { setPath, path, value, handleOpen } = useAppStateContext()
  const isFirstRender = useRef(true)
  let navigate = useNavigate()
  let location = useLocation()
  
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    const timeout = setTimeout(() => {
      setPath(location.pathname + value)
    }, 500)
    return () => {
      clearTimeout(timeout)
      console.log("url to next page is: ", path)
    }
  }, [value])

  return (
    <Fragment>
      <main id='canvas' className={styles.gridContainerI}>
        <div id='first' className={styles.band}></div>
        <div id='second' className={styles.band}></div>
        <div id='third' className={styles.band}></div>
        <img id="logo" src='./src/assets/frontier.svg' className={styles.logo} />
        <div id="window" className={styles.gridContainerII}>
          <div id="help-btns" className={styles.gridItemI}>
            <Button type="home" onClick={() => navigate('/')}>
              <FontAwesomeIcon icon={faBook} inverse fixedWidth />
            </Button>
          </div>
          <div id="nav-btns" className={styles.gridItemI}>
            <Button type="reset" onClick={() => handleOpen()}>
              <FontAwesomeIcon icon={faArrowRotateLeft} inverse fixedWidth />
            </Button>
            <Button type="navigation" onClick={() => navigate(-1)}>
              <FontAwesomeIcon icon={faArrowLeft} inverse fixedWidth />
            </Button>
            <Button type="navigation" onClick={() => navigate(path)}>
              <FontAwesomeIcon icon={faArrowRight} inverse fixedWidth />
            </Button>
          </div>
          <Outlet />
        </div>
      </main>
      <Modal />
    </Fragment>
  )
}