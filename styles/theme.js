
import {
  createMuiTheme,
  responsiveFontSizes
} from '@material-ui/core/styles'

const montserrat = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Montserrat'),
    url('/assets/fonts/Montserrat.woff') format('woff')`
};

const theme = responsiveFontSizes(createMuiTheme({
  typography: {
    fontFamily: 'Montserrat',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [montserrat]
      }
    },
    MuiCard: {
      root: {
        borderRadius: 8,
        height: '100%'
      }
    },
    MuiCardContent: {
      root: {
        padding: 32
      }
    },
    MuiPaper: {
      root: {
        border: '1px solid #e0e1f2 !important',
        borderRadius: '20px !important',
        boxShadow: 'none !important',
      },
    },
    MuiInputBase: {
      input: {        
        '&:-webkit-autofill': {
          boxShadow: '0 0 0 30px white inset !important;',
        },
      },
    },
    MuiTextField: {
      root: {
        '& label, & label.Mui-focused': {
          color: '#d5d5dc',
        },
        '& .MuiInput-underline::before': {
          borderBottomColor: '#d5d5dc',
        },
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
        fontSize: 16,
      }
    },
    MuiCheckbox: {
      colorPrimary: {
        color: '#01a1c3',
        '&.Mui-checked': {
          color: '#01a1c3',
        }
      },
    },
    MuiFormControlLabel: {
      label: {
        fontSize: 14,
        color: '#696974',
        letterSpacing: 0.1,
        userSelect: 'none'
      }
    }
  },
  palette: {
    primary: {
      main: '#00748c',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#f24024',
      contrastText: '#ffffff'
    },
    danger: {
      main: '#f24024',
      contrastText: '#ffffff'
    },
    background: {
      default: '#ffffff',
      primary: '#f6f6f6',
      secondary: '#000000'
    },
    text: {
      primary: '#161616',
      secondary: '#2c2c2c'
    },
  },
  custom: {
    palette: {
      black: '#000000',
      red: '#df0026',
      blue: '#01a1c3',
      purple: '#6f64f8',
      green: '#17c400',
      yellow: '#ffa550',
      grey: '#606060',
      lightGrey: '#999999',
      darkGrey: '#14161f',
      orange: '#da532c',
      white: '#ffffff',
      pink: '#d808dd',
      border: '#d6d6d6',
      ocean: '#00748c',
      score: '#f24024',
      boxBlue: "#01a1c3",
      textGrey: '#d5d5dc',
      lineGrey: '#e2e2ea',
    },
    layout: {
      topAppBarHeight: 80,
      drawerWidth: 280
    },
  }
}));

export default theme;
