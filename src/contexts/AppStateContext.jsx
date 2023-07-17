import React, { createContext, useState } from 'react'

const AppStateContext = createContext({})

export const AppStateProvider = ({ children }) => {

  const pages = {
    '/': 'Getting Started',
    '/existing-service': 'Current Services',
    '/existing-service/check-portability': 'Check Portability',
    '/existing-service/check-portability/active-number': 'Active Number',
    '/existing-service/check-portability/ending-not-portable': 'Ending the Call',
    '/existing-service/check-portability/active-number/provider-info': 'Provider Info',
    '/existing-service/check-portability/active-number/ending-inactive': 'Ending the Call',
    '/existing-service/check-portability/active-number/provider-info/precheck-confirm': 'Confirm',
    '/existing-service/check-portability/active-number/provider-info/ending-no-info': 'Ending the Call',
    '/existing-service/active-number': 'Active Number',
    '/existing-service/active-number/provider-info': 'Provider Info',
    '/existing-service/active-number/ending-inactive': 'Ending the Call',
    '/existing-service/active-number/provider-info/precheck-confirm': 'Confirm',
    '/existing-service/active-number/provider-info/ending-no-info': 'Ending the Call',
    '/existing-service/ending-transfer': 'Ending the Call',
  }

  const defaultValue = 'existing-service'
  const defaultOpen = false
  const defaultPath = ''

  const [value, setValue] = useState(defaultValue)
  const [open, setOpen] = useState(defaultOpen)
  const [firstPage, setFirstPage] = useState(true)
  const [path, setPath] = useState(defaultPath)
  const [state, setState] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
    item6: false,
  });

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleReset = () => {
    setState(false);
    setValue(defaultValue);
    setPath(defaultPath);
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
        state,
        setState,
      }}
    >
      {children}
    </AppStateContext.Provider>
  )
}

export default AppStateContext