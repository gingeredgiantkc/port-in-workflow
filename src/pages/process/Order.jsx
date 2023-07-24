import React, { Fragment } from 'react'
import Title from '../../components/Title'
import Navigation from '../../components/Navigation'
import useProcessFlowContext from '../../hooks/useProcessFlowContext'

function Order() {
  const { taskState } = useProcessFlowContext()
  const { task1, task2, task3 } = taskState
  const disabled = [task1, task2, task3].filter((v) => v).length !== 3
  return (
    <Fragment>
      <Title label="Create New Order" />
      <div className='flex flex-col flex-wrap flex-grow text-white font-medium'>
        <div className='absolute bottom-5 place-self-end'>
          <Navigation disabled={disabled} />
        </div>
      </div>
    </Fragment>
  )
}

export default Order