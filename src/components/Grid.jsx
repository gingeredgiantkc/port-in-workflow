import { Box } from '@mui/material'
import React from 'react'

const Title = (props) => {
  const { sx, ...rest } = props
  return (
    <Box
      sx={{
        fontSize: '3rem',
        fontWeight: '700',
        fontFamily: 'MidPointPro',
        ...sx,
      }}
      {...rest}
    />
  )
}

const Body = (props) => {
  const { sx, ...rest } = props
  return (
    <Box
      sx={{
        fontSize: '1rem',
        ...sx,
      }}
      {...rest}
    />
  )
}

const Grid = (props) => {
  const { sx, ...rest } = props
  return (
    <Box
      sx={{
        display: 'grid',
        ...sx,
      }}
      {...rest}
    />
  )
}

export { Title, Body }
export default Grid