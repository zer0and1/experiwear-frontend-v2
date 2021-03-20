

import { memo } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import ContainedButton from 'components/UI/Buttons/ContainedButton'
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
            <ContainedButton
              href={LINKS.SIGN_IN.HREF}
              className={classes.button}
            >
              Log In
            </ContainedButton>
          ) : (
            <ProfileDropMenu />
          )
      }
    </div>
  );
};

export default memo(NavBarMenu);