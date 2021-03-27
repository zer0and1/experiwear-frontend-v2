
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import clsx from 'clsx'

const useStyles = makeStyles(() => ({
  root: {
    width: 16
  }
}));

const HomeIcon = ({
  isActive = false,
  className,
  viewBox,
  ...rest
}) => {
  const classes = useStyles();
  const color = isActive ? '#01a1c3' : '#606060';

  return (
    <SvgIcon viewBox={viewBox || '0 0 16 19'} {...rest} className={clsx(classes.root, className)}>
      <g id="Welcome" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <g id="Fanband-Hawks-Dashboard" transform="translate(-36.000000, -131.000000)" stroke={color} strokeWidth="2">
          <g id="Dashboard" transform="translate(24.000000, 123.098361)">
            <g id="home" transform="translate(13.000000, 9.442623)">
              <path d="M0,5.71220401 L7,0 L14,5.71220401 L14,14.6885246 C14,15.5898855 13.3035541,16.3205829 12.4444444,16.3205829 L1.55555556,16.3205829 C0.696445945,16.3205829 0,15.5898855 0,14.6885246 L0,5.71220401 Z" id="Path"></path>
              <polyline id="Path" points="4.66666667 16.3205829 4.66666667 8.16029144 9.33333333 8.16029144 9.33333333 16.3205829"></polyline>
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  )
}

export default memo(HomeIcon);
