import { NavLink, Outlet } from 'react-router-dom'
import {
  Box,
  Card,
  CardContent,
  createTheme,
  IconButton,
  ThemeProvider
} from '@mui/material'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled'
import useAppStateContext from '../hooks/useAppStateContext'
import ViewModal from '../components/Modal'
import Breadcrumbs from '../components/Breadcrumbs'

function PrecheckLayout() {
  const { value, state, handleOpen } = useAppStateContext()
  
  const theme = createTheme({
    palette: {
      background: {
        paper: '#ffffff',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          bgcolor: 'background.paper',
          height: '90%',
          width: '50%',
          mt: 4,
          mb: 0,
          mx: 'auto',
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Box sx={{ border: 4, borderRadius: '16px', borderColor: 'error.main' }}>
            <Breadcrumbs />
            <Outlet />
            <ViewModal />
          </Box>
          <Box sx={{ pt: 2, gap: 2, textAlign: 'end' }}>
            <IconButton
              sx={{ fontSize: '4rem' }}
              variant='contained'
              onClick={handleOpen}
              color='error'
              size='large'
            >
              <ReplayCircleFilledIcon fontSize='inherit' />
            </IconButton>
            <IconButton
              sx={{ fontSize: '4rem' }}
              variant='contained'
              component={NavLink}
              to={value}
              color='primary'
              size='large'
            >
              <ArrowCircleRightIcon fontSize='inherit' />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}

export default PrecheckLayout