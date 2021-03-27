
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import clsx from 'clsx'

const useStyles = makeStyles(() => ({
  root: {
    width: 21
  }
}));

const DealIcon = ({
  isActive = false,
  className,
  viewBox,
  ...rest
}) => {
  const classes = useStyles();
  const color = isActive ? '#01a1c3' : '#606060';

  return (
    <SvgIcon viewBox={viewBox || '0 0 21 21'} {...rest} className={clsx(classes.root, className)}>
      <g id="Welcome" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Fanband-Hawks-Dashboard" transform="translate(-35.000000, -544.000000)" fill={color} fillRule="nonzero">
          <g id="Apps" transform="translate(35.055556, 376.025907)">
            <g id="deals" transform="translate(0.000000, 168.356710)">
              <circle id="Oval" cx="13.9444444" cy="5.61738351" r="1"></circle>
              <path d="M18.1057116,0.617383513 L10.4443933,0.617383513 C9.9568997,0.617812605 9.48952915,0.811784357 9.14503372,1.15665381 L1.48371543,8.81674323 C1.1384467,9.16157274 0.944444444,9.62949236 0.944444444,10.1174264 C0.944444444,10.6053605 1.1384467,11.0732801 1.48371543,11.4181096 L9.14503372,19.078199 C9.48991855,19.4234124 9.95791323,19.6173835 10.4459256,19.6173835 C10.9339379,19.6173835 11.4019326,19.4234124 11.7468174,19.078199 L19.4081357,11.4181096 C19.7526882,11.0724171 19.945625,10.6039315 19.9444335,10.1158944 L19.9444335,2.45580497 C19.9444335,1.44047284 19.1212066,0.617383513 18.1057116,0.617383513 Z M18.1057116,10.1158944 L10.4443933,17.7759838 L2.78307501,10.1158944 L10.4443933,2.45580497 L18.1057116,2.45580497 L18.1057116,10.1158944 Z" id="Shape"></path>
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  )
}

export default memo(DealIcon);
