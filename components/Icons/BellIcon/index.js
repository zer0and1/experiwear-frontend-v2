
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import clsx from 'clsx'

const useStyles = makeStyles(() => ({
  root: {
    width: 20
  }
}));

const BellIcon = ({
  className,
  viewBox,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <SvgIcon viewBox={viewBox || '0 0 20 22'} {...rest} className={clsx(classes.root, className)}>
      <g id="Welcome" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <g id="Fanband-Hawks-Dashboard" transform="translate(-1662.000000, -46.000000)" stroke="#606060" strokeWidth="2">
          <g id="Navbar" transform="translate(314.000000, 23.000000)">
            <g id="bell" transform="translate(1349.000000, 24.000000)">
              <path d="M15,6 C15,2.6862915 12.3137085,0 9,0 C5.6862915,0 3,2.6862915 3,6 C3,13 0,15 0,15 L18,15 C18,15 15,13 15,6" id="Path"></path>
              <path d="M10.73,19 C10.3722022,19.6168043 9.71306861,19.9964563 9,19.9964563 C8.28693139,19.9964563 7.62779776,19.6168043 7.27,19" id="Path"></path>
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  )
}

export default memo(BellIcon);
