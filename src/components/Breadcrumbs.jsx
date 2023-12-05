import { Link as RouterLink, useLocation } from 'react-router-dom'
import { Breadcrumbs as MuiBreadcrumbs, Link, Typography } from '@mui/material'
import useAppStateContext from '../hooks/useAppStateContext'

function LinkRouter(props) {
  return <Link {...props} className="hover:cursor-pointer hover:font-bold no-underline" component={RouterLink} />
}

function Breadcrumbs() {
  const { pages } = useAppStateContext()
  let location = useLocation()
  const pathnames = location.pathname.split('/').filter(x => x)
  
  return (
    <MuiBreadcrumbs sx={{
      '& .MuiBreadcrumbs-separator': {
        display: 'none'
        }
      }} separator="" aria-label="breadcrumb">
      {pathnames.map((value, index) => {
        const isLast = index === pathnames.length - 1
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
        return isLast ? (
          <Typography sx={{
              paddingTop: '2px',
              paddingLeft: '2px',
              fontFamily: 'PP Object Sans',
              fontSize: '1rem'
            }} color="#05122d" key={index}>{pages[routeTo]}</Typography>
        ) : (
          <LinkRouter sx={{
              paddingTop: '2px',
              paddingLeft: '2px',
              fontFamily: 'PP Object Sans',
              fontSize: '1rem'
            }} color="#262626" key={index} to={routeTo}>{pages[routeTo]}</LinkRouter>
          )
      })}
    </MuiBreadcrumbs>
  )
}

export default Breadcrumbs