import { Fragment, useEffect, useRef, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import useAppStateContext from '../hooks/useAppStateContext'
import Modal from '../components/Modal'
import Button from '../components/buttons/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faArrowRotateLeft, faBook } from '@fortawesome/free-solid-svg-icons'
import styles from './Precheck.module.scss'
import { effect } from '@preact/signals-react'

export function Precheck() {
  let navigate = useNavigate()
  const currentLocation = useLocation().pathname
  let newRoute = currentLocation
  const { path, handleOpen } = useAppStateContext()
  
  if (currentLocation === '/') {
    newRoute = currentLocation + 'existing-service'
  } else {
    newRoute = currentLocation + path.value
  }
  effect(() => console.log(`current url is: ${newRoute}`))

  function handleNextPage() {
    navigate(newRoute)
    path.value = ''
  }

  // const isFirstRender = useRef(true)
  
/*   useEffect(() => {
    if (isFirstRender.current) {
      console.log(`current path is: ${path}`)
      setPath(path + value)
      isFirstRender.current = false
    }
    return () => {
      console.log(`url to next page is: ${path}`)
      setPath(path + value)
    }
  }, [value])
 */

  return (
    <Fragment>
      <main id='canvas' className={styles.gridContainerI}>
        <div id='first' className={styles.band}></div>
        <div id='second' className={styles.band}></div>
        <div id='third' className={styles.band}></div>
        <img id="logo" src='./src/assets/frontier.svg' className={styles.logo} />
        <div id="window" className={styles.gridContainerII}>
          <div id="nav-btns" className={styles.gridItemI}>
            <Button type="reset" onClick={() => handleOpen()}>
              <FontAwesomeIcon icon={faArrowRotateLeft} inverse fixedWidth />
            </Button>
            <Button type="home" onClick={() => navigate('/')}>
              <FontAwesomeIcon icon={faBook} inverse fixedWidth />
            </Button>
            <Button type="navigation" onClick={() => navigate(-1)}>
              <FontAwesomeIcon icon={faArrowLeft} inverse fixedWidth />
            </Button>
            <Button type="navigation" onClick={handleNextPage}>
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