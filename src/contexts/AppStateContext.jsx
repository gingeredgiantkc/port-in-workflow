import React, { createContext, useState } from 'react'

const AppStateContext = createContext({})

export const AppStateProvider = ({ children }) => {

  const pages = {
    '/': 'Getting Started',
    '/existing-service': 'Current Services',
    '/existing-service/check-portability': 'Check Portability',
    '/existing-service/check-portability/active-number': 'Active Number',
    '/existing-service/check-portability/ending-not-portable': 'End',
    '/existing-service/check-portability/active-number/provider-info': 'Provider Info',
    '/existing-service/check-portability/active-number/ending-inactive': 'End',
    '/existing-service/check-portability/active-number/provider-info/precheck-confirm': 'Complete',
    '/existing-service/check-portability/active-number/provider-info/ending-no-info': 'End',
    '/existing-service/active-number': 'Active Number',
    '/existing-service/active-number/provider-info': 'Provider Info',
    '/existing-service/active-number/ending-inactive': 'End: Inactive',
    '/existing-service/active-number/provider-info/precheck-confirm': 'Confirm',
    '/existing-service/active-number/provider-info/ending-no-info': 'End',
    '/existing-service/ending-transfer': 'End',
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
    setPath('/existing-service');
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