import { createTheme } from '@mui/material';

export const theme =  createTheme({
  palette: {
    primary: {
      main: '#ff0037',
    },
    secondary: {
      main: '#05122d',
    },
    background: {
      default: '#ffffff',
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
    fontFamily: '"PP Object Sans Regular", "Helvetica", "Arial", sans-serif',
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
