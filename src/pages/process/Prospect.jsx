import React, { Fragment } from 'react'
import Title from '../../components/Title'
import { One, Three, Two } from '../../steps/Prospect'
import Navigation from '../../components/Navigation'
import useProcessFlowContext from '../../hooks/useProcessFlowContext'

function Prospect() {
  const { taskState } = useProcessFlowContext()
  const { task1, task2, task3 } = taskState
  const disabled = [task1, task2, task3].filter((v) => v).length !== 3
  return (
    <Fragment>
      <Title label="Create a Prospect" />
      <div className='flex flex-col flex-wrap flex-grow text-white font-medium p-0 ml-4 mt-4'>
        <p>Complete all tasks below to proceed to the next step:</p>
        <One />
        <Two />
        <Three />
        <div className='absolute bottom-5 place-self-end'>
          <Navigation disabled={disabled} />
        </div>
      </div>
    </Fragment>
  )
}

export default Prospect