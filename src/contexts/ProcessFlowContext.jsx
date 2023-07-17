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
  
  const handleNextStep = () => setStepNumber((prev) => prev + 1)
  const handlePrevStep = () => setStepNumber((prev) => prev - 1)
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