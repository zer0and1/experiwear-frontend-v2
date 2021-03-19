

import { memo } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import OutlinedButton from 'components/UI/Buttons/OutlinedButton'
import ProfileDropMenu from './ProfileDropMenu'
import LINKS from 'utils/constants/links'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    marginRight: theme.spacing(1)
  }
}));

const NavBarMenu = () => {
  const classes = useStyles();
  const { accessToken } = useSelector(state => state.auth);

  return (
    <div className={classes.root}>
      {
        !accessToken
          ? (
            <OutlinedButton
              href={LINKS.SIGN_IN.HREF}
              className={classes.button}
            >
              Log In
            </OutlinedButton>
          ) : (
            <ProfileDropMenu />
          )
      }
    </div>
  );
};

export default memo(NavBarMenu);