import React, { Fragment } from 'react'
import Title from '../../components/Title'
import Navigation from '../../components/Navigation'

function Appointment() {
  return (
    <Fragment>
      <Title label="Appointment" />
      <div className='flex flex-col flex-wrap flex-grow text-white font-medium'>
        <div className='absolute bottom-5 place-self-end'>
          <Navigation />
        </div>
      </div>
    </Fragment>
  )
}

export default Appointment