import { Unstable_Grid2 as MuiGrid, Box } from '@mui/material'
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
        flexGrow: 1,
        display: 'grid',
        ...sx,
      }}
      {...rest}
    >
      <MuiGrid
        sx={{
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'repeat(6, 0.5fr)',
          ...sx,
        }}
        {...rest}
      />
    </Box>
  )
}

export { Title, Body }
export default Grid