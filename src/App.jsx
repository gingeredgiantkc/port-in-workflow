import React, { Fragment } from 'react'
import './styles.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  } from 'react-router-dom'

/*** Layouts ***/
import { Precheck as PrecheckLayout } from './layouts/Precheck'
import { Process as ProcessLayout } from './layouts/Process'
import LastPage from './layouts/LastPage'

/*** Pages ***/
// precheck
import { ActiveNumber, CheckPortability, CurrentServices, Home, PrecheckConfirm, ProviderInfo } from './pages/precheck'
// end
import { EndingInactive, EndingNoInfo, EndingNotPortable, EndingTransferToSales } from './pages/end'

/*** Routes ***/
const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path='/' element={<PrecheckLayout />}>
        <Route index element={<Home />} />    
        <Route path='existing-service' element={<CurrentServices />} /> 
        <Route path='existing-service/check-portability' element={<CheckPortability />} />
        <Route path='existing-service/check-portability/active-number' element={<ActiveNumber />} />
        <Route path='existing-service/check-portability/active-number/provider-info' element={<ProviderInfo />} />
        <Route path='existing-service/check-portability/active-number/ending-inactive' element={<EndingInactive />} />
        <Route path='existing-service/check-portability/active-number/provider-info/precheck-confirm' element={<PrecheckConfirm />} />
        <Route path='existing-service/check-portability/active-number/provider-info/ending-no-info' element={<EndingNoInfo />} />
        <Route path='existing-service/check-portability/ending-not-portable' element={<EndingNotPortable />} />
        <Route path='existing-service/active-number' element={<ActiveNumber />} />
        <Route path='existing-service/active-number/provider-info' element={<ProviderInfo />} />
        <Route path='existing-service/active-number/ending-inactive' element={<EndingInactive />} />
        <Route path='existing-service/active-number/provider-info/precheck-confirm' element={<PrecheckConfirm />} />
        <Route path='existing-service/active-number/provider-info/ending-no-info' element={<EndingNoInfo />} />
        <Route path='existing-service/ending-transfer' element={<EndingTransferToSales />} />
      </Route>
      <Route path='/workflow' element={<ProcessLayout />} />
      <Route path='/complete' element={<LastPage />} />
    </Fragment>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  ) 
}
