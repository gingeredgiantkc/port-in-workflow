import React, { Fragment } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import Portable from './pages/portability/Portable'
import NonPortable from './pages/portability/NonPortable'
import Close from './pages/Close'
import PortWithAcct from './pages/portability/PortWithAcct'

// layouts
import RootLayout from './layouts/RootLayout'
import HomeLayout from './layouts/HomeLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path='/' element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path='close' element={<Close />} />
      </Route>
      <Route path='/precheck' element={<RootLayout />}>
        <Route index element={<Portable />} />
        <Route path='port-wo-acct-vo' element={<NonPortable />} />
        <Route path='port-wo-acct' element={<NonPortable />} />
        <Route path='port-w-acct-vo' element={<NonPortable />} />
        <Route path='port-w-acct' element={<PortWithAcct />} />
        <Route path='confirm' element={<PortWithAcct />} />
        <Route path='non-portable' element={<Close />} />
      </Route>
    </Fragment>
  )
)

function App() {
  return (
    <RouterProvider router={router} />      
  ) 
}

export default App
