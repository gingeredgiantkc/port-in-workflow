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
import Home from './pages/Home'
import PrecheckConfirm from './pages/PrecheckConfirm'
import ExistingService from './pages/ExistingServices'
import CheckPortability from './pages/CheckPortability'
import ProviderInfo from './pages/ProviderInfo'
import EndingNoInfo from './pages/end/EndingNoInfo'
import EndingNotPortable from './pages/end/EndingNotPortable'
import EndingTransferToSales from './pages/end/EndingTransferToSales'
import ActiveNumber from './pages/ActiveNumber'
import EndingInactive from './pages/end/EndingInactive'

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
