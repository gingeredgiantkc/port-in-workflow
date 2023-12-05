import { signal } from '@preact/signals-react'
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
    '/existing-service/active-number/provider-info/precheck-confirm': 'Complete',
    '/existing-service/active-number/provider-info/ending-no-info': 'End',
    '/existing-service/ending-transfer': 'End',
  }

  const path = signal('')
  const [open, setOpen] = useState(false)

  const [firstPage, setFirstPage] = useState(true)
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
//  const handleReset = () => {
//    setValue(undefined);
 //   setPath('/existing-service');
//    setOpen(false);
//    setFirstPage(true);
//  }
  
  return (
    <AppStateContext.Provider
      value={{
        pages,
        open,
        handleOpen,
        handleClose,
/*    handleReset,*/
        path,
        firstPage,
        setFirstPage,
        state,
        setState
      }}
    >
      {children}
    </AppStateContext.Provider>
  )
}

export default AppStateContext