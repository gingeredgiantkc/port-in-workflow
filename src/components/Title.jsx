import React from 'react'
import './components.css'

const Title = (props) => {
  const { label } = props
  return (
    <div className='header'>
      <div className='container'>
        <div className='title'>{label}</div>
      </div>
    </div>
  )
}

export default Title