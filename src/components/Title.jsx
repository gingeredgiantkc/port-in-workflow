import React from 'react'

const Title = (props) => {
  const { label } = props
  return (
    <div className='col-start-3 col-span-full bg-torch-red place-content-center relative'>
      <h1 className='text-white text-[3rem] px-10 py-6'>{label}</h1>
    </div>
  )
}

export default Title