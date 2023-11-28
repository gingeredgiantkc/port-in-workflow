import { Fragment, useEffect, useRef } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import useAppStateContext from '../hooks/useAppStateContext'
import Modal from '../components/Modal'
import Button from '../components/buttons/Next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons'

function RootLayout() {
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
      <main id="main" className="grid-container-1">
        <div id="band-1"></div>
        <div id="band-2"></div>
        <div id="band-3"></div>
        <img id="logo" src='./src/assets/frontier.svg' className="grid-item-1"/>
        <div id="window" className="grid-item-2 grid-container-2">
          <div id="nav-btns" className="grid-item-1">
            <Button onClick={() => handleOpen()}>
              <FontAwesomeIcon icon={faArrowRotateLeft} inverse fixedWidth />
            </Button>
            <Button onClick={() => navigate(-1)}>
              <FontAwesomeIcon icon={faArrowLeft} inverse fixedWidth />
            </Button>
            <Button onClick={() => navigate(path)}>
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

export default RootLayout