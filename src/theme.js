import { createTheme } from '@mui/material/styles';

export const theme =  createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#141928',
    },
    secondary: {
      main: 'rgba(243,8,12,0.95)',
    },
    background: {
      default: '#141928',
    },
    error: {
      main: '#da142f',
    },
    warning: {
      main: '#ffc300',
    },
    success: {
      main: '#57af4c',
    },
  },
  typography: {
    fontFamily: '"object-sans", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"bandwidth", "Helvetica", "Arial", sans-serif',
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiButton: {
      size: 'small',
    },
    MuiButtonGroup: {
      size: 'small',
    },
    MuiCheckbox: {
      size: 'small',
    },
    MuiFab: {
      size: 'small',
    },
    MuiFormControl: {
      margin: 'dense',
      size: 'small',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiRadio: {
      size: 'small',
    },
    MuiSwitch: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
      size: 'small',
    },
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: 'small',
    },
    MuiAppBar: {
      color: 'secondary',
    },
  },
});
