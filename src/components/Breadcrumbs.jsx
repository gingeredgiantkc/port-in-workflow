import * as React from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { Breadcrumbs as MuiBreadcrumbs, Link, Typography } from '@mui/material'
import useAppStateContext from '../hooks/useAppStateContext'

function LinkRouter(props) {
  return <Link {...props} className='hover:text-slate-300' component={RouterLink} />
}

function Breadcrumbs() {
  const { pages } = useAppStateContext()
  let location = useLocation()
  const pathnames = location.pathname.split('/').filter(x => x)
  
  return (
    <MuiBreadcrumbs separator="" aria-label="breadcrumb">
      {pathnames.map((name, index) => {
        const isLast = index === pathnames.length - 1
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
        return isLast ? (
          <div className='flex-none w-[194px] text-justify pl-3 pb-6 gap-6'>
            <Typography color="primary" key={name}>{pages[routeTo]}</Typography>
          </div>
        ) : (
          <div className='flex-none w-[194px] text-justify pl-3 pb-6 gap-6'>
            <LinkRouter color="#ffffff" key={name} to={routeTo}>{pages[routeTo]}</LinkRouter>
          </div>
        )
      })}
    </MuiBreadcrumbs>
  )
}

export default Breadcrumbs