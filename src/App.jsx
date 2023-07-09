import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme.js'
import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  } from 'react-router-dom'

// layouts
import RootLayout from './layouts/root'

// pages
import Home from './pages/Home'
import PrecheckConfirm from './pages/PrecheckConfirm'
import ExistingService from './pages/ExistingService'
import CheckPortability from './pages/CheckPortability'
import ProviderInfo from './pages/ProviderInfo'
import EndingNoInfo from './pages/end/EndingNoInfo'
import EndingNotPortable from './pages/end/EndingNotPortable'
import EndingTransferToSales from './pages/end/EndingTransferToSales'

const router = createMemoryRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />    
      <Route path='existing-service' element={<ExistingService />} /> 
      <Route path='existing-service/check-portability' element={<CheckPortability />} />
      <Route path='existing-service/check-portability/provider-info' element={<ProviderInfo />} />
      <Route path='existing-service/check-portability/provider-info/precheck-confirm' element={<PrecheckConfirm />} />
      <Route path='existing-service/check-portability/provider-info/ending-no-info' element={<EndingNoInfo />} />
      <Route path='existing-service/check-portability/ending-not-portable' element={<EndingNotPortable />} />
      <Route path='existing-service/provider-info' element={<ProviderInfo />} />
      <Route path='existing-service/provider-info/precheck-confirm' element={<PrecheckConfirm />} />
      <Route path='existing-service/provider-info/ending-no-info' element={<EndingNoInfo />} />
      <Route path='existing-service/ending-transfer' element={<EndingTransferToSales />} />
    </Route>
  )
)

function App() {
  let frontier = th
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  ) 
}

export default App
