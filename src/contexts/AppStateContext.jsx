import React, { createContext, useState } from 'react'

const AppStateContext = createContext({})

export const AppStateProvider = ({ children }) => {

  const pages = {
    '/': 'Getting Started',
    '/existing-service': 'Current Services',
    '/existing-service/check-portability': 'Check Portability',
    '/existing-service/check-portability/provider-info': 'Provider Info',
    '/existing-service/provider-info': 'Provider Info',
    '/existing-service/ending-transfer': 'Ending the Call',
    '/existing-service/check-portability/ending-not-portable': 'Ending the Call',
    '/existing-service/check-portability/provider-info/ending-no-info': 'Ending the Call',
    '/existing-service/provider-info/precheck-confirm': 'Confirm',
    '/existing-service/check-portability/provider-info/precheck-confirm': 'Confirm',
  }

  const defaultValue = ''
  const defaultOpen = false
  const defaultPath = '/'

  const [value, setValue] = useState(defaultValue)
  const [open, setOpen] = useState(defaultOpen)
  const [firstPage, setFirstPage] = useState(true)
  const [path, setPath] = useState(defaultPath)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleReset = () => {
    setValue(defaultValue);
    setPath('/');
    setOpen(defaultOpen);
    setFirstPage(true);
  }
  
  return (
    <AppStateContext.Provider
      value={{
        pages,
        defaultValue,
        defaultOpen,
        open,
        path,
        setPath,
        handleOpen,
        handleClose,
        handleReset,
        value,
        setValue,
        firstPage,
        setFirstPage,
      }}
    >
      {children}
    </AppStateContext.Provider>
  )
}

export default AppStateContext