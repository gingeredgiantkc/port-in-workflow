import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

// pages
import Home from './routes/home'
import One from './routes/one'

// layouts
import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='1' element={<One />} />
      
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />      
  ) 
}

export default App
