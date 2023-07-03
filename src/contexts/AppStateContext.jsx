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

  const defaultState = {
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
  }
  const defaultValue = '/'
  const defaultOpen = false

  const [state, setState] = useState(defaultState)
  const [value, setValue] = useState(defaultValue)
  const [open, setOpen] = useState(defaultOpen)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleReset = () => {
    setState(defaultState);
    setValue(defaultValue);
    setOpen(defaultOpen);
  }
  
  return (
    <AppStateContext.Provider
      value={{
        pages,
        defaultState,
        defaultValue,
        defaultOpen,
        open,
        handleOpen,
        handleClose,
        handleReset,
        value,
        setValue,
        state,
        setState,
      }}
    >
      {children}
    </AppStateContext.Provider>
  )
}

export default AppStateContext