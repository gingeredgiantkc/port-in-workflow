import * as React from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { Breadcrumbs as MuiBreadcrumbs, Link, Typography } from '@mui/material'
import useAppStateContext from '../hooks/useAppStateContext'

function LinkRouter(props) {
  return <Link {...props} component={RouterLink} />
}

function Breadcrumbs() {
  const { pages } = useAppStateContext()
  let location = useLocation()
  const pathnames = location.pathname.split('/').filter(x => x)
  console.log(pathnames)
  
  return (
    <MuiBreadcrumbs aria-label="breadcrumb">
      {pathnames.map((name, index) => {
        const isLast = index === pathnames.length - 1
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
        return isLast ? (
          <Typography color="text.primary" key={name}>{pages[routeTo]}</Typography>
        ) : (
          <LinkRouter key={name} to={routeTo}>{pages[routeTo]}</LinkRouter>
        )
      })}
    </MuiBreadcrumbs>
  )
}

export default Breadcrumbs