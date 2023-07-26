import React from 'react'

const Title = (props) => {
  const { label } = props
  return (
    <div className='bg-torch-red flex flex-nowrap'>
      <p className='text-white 2xl:text-5xl text-4xl pl-6 pt-6 font-bandwidth'>
        {label}
      </p>
    </div>
  )
}

export default Title