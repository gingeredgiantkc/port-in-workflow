import React, { Fragment } from 'react'
import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  } from 'react-router-dom'

// layouts
import RootLayout from './layouts/RootLayout'
import ProcessLayout from './layouts/ProcessLayout'
import LastPage from './layouts/LastPage'

// pre-check pages
import { ActiveNumber, CheckPortability, ExistingService, Home, PrecheckConfirm, ProviderInfo } from './pages/precheck'
// end pages
import { EndingInactive, EndingNoInfo, EndingNotPortable, EndingTransferToSales } from './pages/end'

// routes
const router = createMemoryRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />    
        <Route path='existing-service' element={<ExistingService />} /> 
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
