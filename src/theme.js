import { createTheme } from '@mui/material';

export const theme =  createTheme({
  palette: {
    primary: {
      main: '#96fff5',
    },
    secondary: {
      main: '#141928',
    },
    background: {
      default: '#141928',
    },
    error: {
      main: '#da142f',
    },
    warning: {
      main: '#ff0037',
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
