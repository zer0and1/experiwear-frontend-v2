
import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import clsx from 'clsx'

const useStyles = makeStyles(() => ({
  root: {
    width: 18
  }
}));

const CalendarIcon = ({
  isActive = false,
  className,
  viewBox,
  ...rest
}) => {
  const classes = useStyles();
  const color = isActive ? '#01a1c3' : '#606060';

  return (
    <SvgIcon viewBox={viewBox || '0 0 18 22'} {...rest} className={clsx(classes.root, className)}>
      <g id="Welcome" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <g id="Fanband-Hawks-Dashboard" transform="translate(-37.000000, -583.000000)" stroke={color} strokeWidth="2">
          <g id="Apps" transform="translate(35.055556, 376.025907)">
            <g id="calendar" transform="translate(2.944444, 208.264249)">
              <rect id="Rectangle" x="0" y="2.11398964" width="16" height="16.9119171" rx="2"></rect>
              <line x1="11.5" y1="-1.19546984e-13" x2="11.5" y2="4.22797927" id="Path"></line>
              <line x1="4.5" y1="-1.19546984e-13" x2="4.5" y2="4.22797927" id="Path"></line>
              <line x1="0" y1="7.92746114" x2="16" y2="7.92746114" id="Path"></line>
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  )
}

export default CalendarIcon;
