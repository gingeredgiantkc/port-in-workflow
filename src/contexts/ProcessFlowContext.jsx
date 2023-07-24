import React, { createContext, useState } from 'react'

const ProcessFlowContext = createContext({})

export const ProcessFlowProvider = ({ children }) => {

  const steps = [
    "Start",
    "Prospect",
    "Order",
    "Credit",
    "Provider",
    "Billing",
    "Appointment",
    "Review",
    "End"
  ]

  const [open, setOpen] = useState(false)
  const [stepNumber, setStepNumber] = useState(1)
  const [taskState, setTaskState] = useState({
    task1: false,
    task2: false,
    task3: false,
    task4: false,
    task5: false,
    task6: false,
    task7: false,
    task8: false,
    task9: false,
    task10: false,
  })

  const handleNextStep = () => {
    setStepNumber((prev) => prev + 1)
    setTaskState(false)
  }
  const handlePrevStep = () => {
    setStepNumber((prev) => prev - 1)
    setTaskState(false)
  }
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <ProcessFlowContext.Provider
      value={{
        steps,
        open,
        setOpen,
        stepNumber,
        setStepNumber,
        taskState,
        setTaskState,
        handleNextStep,
        handlePrevStep,
        handleOpen,
        handleClose,
      }}
    >
      {children}
    </ProcessFlowContext.Provider> 
  )
}

export default ProcessFlowContext