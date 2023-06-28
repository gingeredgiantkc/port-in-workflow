import React, { createContext, useState } from 'react'

const AppStateContext = createContext({})

export const AppStateProvider = ({ children }) => {

  const pages = []

  const [newPage, setNewPage] = useState(0)
  const [currentPage, setCurrentPage] = useState(newPage)

  const handleNextPage = () => {
    
  }
  
  return (
    <AppStateContext.Provider
      value={{
        pages,
        currentPage,
        setCurrentPage,
        newPage,
        setNewPage,
      }}
    >
      {children}
    </AppStateContext.Provider>
  )
}

export default AppStateContext