import React, { Fragment } from 'react'
import './components.css'

const Title = (props) => {
  const { label } = props
  return (
    <hgroup className="header">
      <header className='title'>{label}</header>
    </hgroup>
  )
}

export default Title