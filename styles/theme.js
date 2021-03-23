
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
    }
  },
  palette: {
    primary: {
      light: '#4791db',
      main: '#000000',
      dark: '#115293',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#555e6c',
      main: '#587489',
      dark: '#2c3b46',
      contrastText: '#ffffff'
    },
    danger: {
      light: '#c944dd',
      main: '#df0026',
      dark: '#b20000',
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
      border: '#d6d6d6'
    },
    layout: {
      topAppBarHeight: 80,
      drawerWidth: 280
    }
  }
}));

export default theme;
