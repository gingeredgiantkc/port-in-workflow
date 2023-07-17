import React from 'react'

const Title = (props) => {
  const { label } = props
  return (
    <div className='bg-torch-red flex flex-nowrap'>
      <div className='text-white 2xl:text-5xl text-4xl pl-6 pt-12 font-bandwidth'>{label}</div>
    </div>
  )
}

export default Title