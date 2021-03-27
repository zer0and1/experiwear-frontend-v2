
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import clsx from 'clsx'

const useStyles = makeStyles(() => ({
  root: {
    width: 18
  }
}));

const MailIcon = ({
  isActive = false,
  className,
  viewBox,
  ...rest
}) => {
  const classes = useStyles();
  const color = isActive ? '#01a1c3' : '#606060';

  return (
    <SvgIcon viewBox={viewBox || '0 0 18 17'} {...rest} className={clsx(classes.root, className)}>
      <g id="Welcome" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <g id="Fanband-Hawks-Dashboard" transform="translate(-36.000000, -422.000000)" stroke={color} strokeWidth="2">
          <g id="Apps" transform="translate(35.055556, 376.025907)">
            <g id="mail" transform="translate(1.944444, 47.481865)">
              <path d="M1.6,0 L14.4,0 C15.28,0 16,0.761036269 16,1.69119171 L16,11.838342 C16,12.7684974 15.28,13.5295337 14.4,13.5295337 L1.6,13.5295337 C0.72,13.5295337 0,12.7684974 0,11.838342 L0,1.69119171 C0,0.761036269 0.72,0 1.6,0 Z" id="Path"></path>
              <polyline id="Path" points="16 1.69119171 8 6.38894646 0 1.69119171"></polyline>
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  )
}

export default memo(MailIcon);
