import React, { Fragment } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Precheck from './pages/precheck'
import AcctVoip from './pages/precheck/acct/AcctVoip'
import Transfer from './pages/precheck/end/Transfer'
import Acct from './pages/precheck/acct/Acct'
import Portable from './pages/precheck/tn/Portable'
import PrecheckConfirm from './pages/precheck/PrecheckConfirm'
import NonPortable from './pages/precheck/end/NonPortable'


// layouts
import HomeLayout from './layouts/home'
import PrecheckLayout from './layouts/precheck'
import EndLayout from './layouts/end'
import NoInfo from './pages/precheck/end/NoInfo'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path='/' element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='/precheck' element={<PrecheckLayout />}>
        <Route index element={<Precheck />} />
        <Route path='portable' element={<Portable />} />
        <Route path='acct-1' element={<AcctVoip />} />
        <Route path='acct-2' element={<Acct />} />
        <Route path='confirm' element={<PrecheckConfirm />} />
      </Route>
      <Route path='/end' element={<EndLayout />}>
        <Route path='transfer' element={<Transfer />} />
        <Route path='non-portable' element={<NonPortable />} />
        <Route path='no-info' element={<NoInfo />} />
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
