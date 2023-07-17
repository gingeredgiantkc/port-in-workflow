import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { AppStateProvider } from './contexts/AppStateContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <AppStateProvider>
    <App />
  </AppStateProvider>
)
