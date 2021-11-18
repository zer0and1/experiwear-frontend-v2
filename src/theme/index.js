import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import overrides from './overrides';
import palette from './palette';
import props from './props';
import custom from './custom';

const theme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: 'SFProText-Regular',
    },
    overrides,
    props,
    palette,
    custom,
  })
);

export default theme;
