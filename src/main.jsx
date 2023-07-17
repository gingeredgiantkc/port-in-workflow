import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { AppStateProvider } from './contexts/AppStateContext'
import { ProcessFlowProvider } from './contexts/ProcessFlowContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <AppStateProvider>
    <ProcessFlowProvider>
      <App />
    </ProcessFlowProvider>
  </AppStateProvider>
)
