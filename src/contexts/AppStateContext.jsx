import React, { createContext, useState } from 'react'

const AppStateContext = createContext({})

export const AppStateProvider = ({ children }) => {

  const pages = [
    'Getting Started',
    'Portability',
    'The Prospect',
    'Create New Order',
    'Credit Check',
    'Provider Info',
    'Review',
    'Due Date',
    'Disconnect',
    'Closing the Call',
  ]

  const [value, setValue] = useState('')

  return (
    <AppStateContext.Provider
      value={{
        pages,
        value,
        setValue,
      }}
    >
      {children}
    </AppStateContext.Provider>
  )
}

export default AppStateContext