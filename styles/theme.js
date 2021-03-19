
import {
  createMuiTheme,
  responsiveFontSizes
} from '@material-ui/core/styles'

const ubuntu = {
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Ubuntu'),
    url('/assets/fonts/Ubuntu.woff2') format('woff2')`
};

const theme = responsiveFontSizes(createMuiTheme({
  typography: {
    fontFamily: 'Ubuntu',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [ubuntu]
      }
    }
  },
  palette: {
    primary: {
      light: '#4791db',
      main: '#f2556f',
      dark: '#ecebed',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#555e6c',
      main: '#0a00ff',
      dark: '#1e2532',
      contrastText: '#ffffff'
    },
    danger: {
      light: '#c944dd',
      main: '#eb196e',
      dark: '#b20000',
      contrastText: '#ffffff'
    },
    background: {
      default: '#ffffff',
      primary: '#1b1f2e',
      secondary: '#0f1118'
    },
    text: {
      primary: '#fff',
      secondary: '#a2a1b2'
    },
  },
  custom: {
    palette: {
      grey: '#ecebed',
      darkGrey: '#14161f',
      orange: '#da532c',
      white: '#ffffff',
      pink: '#d808dd',
      red: '#f2556f',
      yellow: '#ffb418',
      green: '#41d98d',
      blue: '#4595e6',
      border: '#f1f0f2'
    },
    layout: {
      topAppBarHeight: 80,
      drawerWidth: 294
    }
  }
}));

export default theme;
