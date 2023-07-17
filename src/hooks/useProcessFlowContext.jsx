import { useContext } from 'react'
import ProcessFlowContext from '../contexts/ProcessFlowContext'

const useProcessFlowContext = () => {
  return useContext(ProcessFlowContext)
}

export default useProcessFlowContext