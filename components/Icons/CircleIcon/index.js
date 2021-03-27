
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import clsx from 'clsx'

const useStyles = makeStyles(() => ({
  root: {
    width: 13
  }
}));

const CircleIcon = ({
  color = '#606060',
  className,
  viewBox,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <SvgIcon viewBox={viewBox || '0 0 13 13'} {...rest} className={clsx(classes.root, className)}>
      <g id="Welcome" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <g id="Fanband-Hawks-Dashboard" transform="translate(-38.000000, -178.000000)" stroke={color} strokeWidth="2">
          <g id="Dashboard" transform="translate(24.000000, 166.098361)">
            <g id="circle" transform="translate(15.000000, 12.901639)">
              <circle id="Oval" cx="5.5" cy="5.5" r="5.5"></circle>
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  )
}

export default memo(CircleIcon);
