import React from 'react'
import useAppStateContext from '../hooks/useAppStateContext'

function Header() {
  const { pages } = useAppStateContext()
  console.log(pages)

  for (let i = 0; i < pages.length; i++) {
    return (
      <div>{pages[0]}</div>
    )
  }
}

export default Header