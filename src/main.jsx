import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppStateProvider } from './contexts/AppStateContext'
import { ProcessFlowProvider } from './contexts/ProcessFlowContext'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'
import './fontawesome'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <AppStateProvider>
      <ProcessFlowProvider>
        <App />
      </ProcessFlowProvider>
    </AppStateProvider>
  </ThemeProvider>
)
