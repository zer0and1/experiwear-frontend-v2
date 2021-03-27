
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import clsx from 'clsx'

const useStyles = makeStyles(() => ({
  root: {
    width: 18
  }
}));

const MessageSquareIcon = ({
  isActive = false,
  className,
  viewBox,
  ...rest
}) => {
  const classes = useStyles();
  const color = isActive ? '#01a1c3' : '#606060';

  return (
    <SvgIcon viewBox={viewBox || '0 0 18 20'} {...rest} className={clsx(classes.root, className)}>
      <g id="Welcome" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <g id="Fanband-Hawks-Dashboard" transform="translate(-37.000000, -462.000000)" stroke={color} strokeWidth="2">
          <g id="Apps" transform="translate(35.055556, 376.025907)">
            <g id="message-square" transform="translate(2.944444, 87.647668)">
              <path d="M16,11.2746114 C16,12.3124107 15.2040618,13.1537133 14.2222222,13.1537133 L3.55555556,13.1537133 L0,16.9119171 L0,1.8791019 C0,0.841302577 0.795938223,0 1.77777778,0 L14.2222222,0 C15.2040618,0 16,0.841302577 16,1.8791019 L16,11.2746114 Z" id="Path"></path>
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  )
}

export default memo(MessageSquareIcon);
