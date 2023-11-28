import * as React from 'react'
import './buttons.css'

export default function Button({ onClick, children }) {
  return (
    <button className="pushable" onClick={onClick}>
      <span className="shadow" />
      <span className="edge" />
      <span className="front">
        {children}
      </span>
    </button>
  )
}
