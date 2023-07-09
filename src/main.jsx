import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { AppStateProvider } from './contexts/AppStateContext'
import { StyledEngineProvider } from '@mui/material/styles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </StyledEngineProvider>
  </React.StrictMode>
)
