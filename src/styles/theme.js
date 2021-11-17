import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const fonts = [
  {
    fontFamily: 'SFProText-Regular',
    src: `local('SFProText-Regular'), url('/assets/fonts/SFProText-Regular.ttf') format('truetype')`,
  },
  {
    fontFamily: 'SFProText-Bold',
    src: `local('SFProText-Bold'), url('/assets/fonts/SFProText-Bold.ttf') format('truetype')`,
  },
  {
    fontFamily: 'SFProText-Semibold',
    src: `local('SFProText-Semibold'), url('/assets/fonts/SFProText-Semibold.ttf') format('truetype')`,
  },
  {
    fontFamily: 'SFProText-Medium',
    src: `local('SFProText-Medium'), url('/assets/fonts/SFProText-Medium.ttf') format('truetype')`,
  },
  {
    fontFamily: 'SFProText-Light',
    src: `local('SFProText-Light'), url('/assets/fonts/SFProText-Light.ttf') format('truetype')`,
  },
  {
    fontFamily: 'SFUIText-Regular',
    src: `local('SFUIText-Regular'), url('/assets/fonts/SFUIText-Regular.ttf') format('truetype')`,
  },
  {
    fontFamily: 'SFUIText-Medium',
    src: `local('SFUIText-Medium'), url('/assets/fonts/SFUIText-Medium.ttf') format('truetype')`,
  },
  {
    fontFamily: 'SFProDisplay-BlackItalic',
    src: `local('SFProDisplay-BlackItalic'), url('/assets/fonts/SFProDisplay-BlackItalic.ttf') format('truetype')`,
  },
];

const theme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: 'SFProText-Regular',
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': fonts,
        },
      },
      MuiCard: {
        root: {
          borderRadius: 8,
          height: '100%',
        },
      },
      MuiCardContent: {
        root: {
          padding: 32,
        },
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
        },
      },
      MuiCheckbox: {
        colorPrimary: {
          color: '#01a1c3',
          '&.Mui-checked': {
            color: '#01a1c3',
          },
        },
      },
      MuiFormControlLabel: {
        label: {
          fontSize: 14,
          color: '#696974',
          letterSpacing: 0.1,
          userSelect: 'none',
        },
      },
      MuiCardHeader: {
        root: {
          padding: '48px 25px 0px 25px',
        },
        title: {
          display: 'inline-block',
          fontFamily: 'SFProDisplay-BlackItalic',
          fontSize: 16,
          fontWeight: 900,
          letterSpacing: 0.48,
          color: '#01a1c3',
          textTransform: 'uppercase',
        },
        subheader: {
          display: 'inline-block',
          float: 'right',
          color: '#9ea3ba',
          fontFamily: 'SFProText-Regular',
          fontSize: 14,
          letterSpacing: 0.42,
        },
      },
    },
    props: {
      MuiButton: {
        variant: 'contained',
        color: 'primary',
        fullWidth: true,
      },
    },
    palette: {
      primary: {
        main: '#00748c',
        contrastText: '#fff',
      },
      secondary: {
        main: '#f24024',
        contrastText: '#fff',
      },
      info: {
        main: '#01a1c3',
        contrastText: '#fff',
      },
      danger: {
        main: '#f24024',
        contrastText: '#fff',
      },
      background: {
        default: '#fff',
        primary: '#f6f6f6',
        secondary: '#000000',
      },
      text: {
        primary: '#161616',
        secondary: '#2c2c2c',
      },
      news: {
        main: '#01a1c3',
      },
      survey: {
        main: '#ffc659',
      },
      score: {
        main: '#f24024',
      },
      promo: {
        main: '#825dde',
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
        white: '#fff',
        pink: '#d808dd',
        border: '#d6d6d6',
        textGrey: '#959caf',
      },
      layout: {
        sideMenu: 210,
        sideBar: 420,
      },
      fonts: {
        SFProTextRegular: 'SFProText-Regular',
        SFProTextMedium: 'SFProText-Medium',
        SFProTextBold: 'SFProText-Bold',
        SFProTextSemibold: 'SFProText-Semibold',
        SFProTextLight: 'SFProText-Light',
        SFUITextRegular: 'SFUIText-Regular',
        SFUITextMedium: 'SFUIText-Medium',
        SFProDisplayBlackItalic: 'SFProDisplay-BlackItalic',
      },
    },
  })
);

export default theme;
