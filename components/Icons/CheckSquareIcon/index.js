
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import clsx from 'clsx'

const useStyles = makeStyles(() => ({
  root: {
    width: 18
  }
}));

const CheckSquareIcon = ({
  isActive = false,
  className,
  viewBox,
  ...rest
}) => {
  const classes = useStyles();
  const color = isActive ? '#01a1c3' : '#606060';

  return (
    <SvgIcon viewBox={viewBox || '0 0 18 19'} {...rest} className={clsx(classes.root, className)}>
      <g id="Welcome" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <g id="Fanband-Hawks-Dashboard" transform="translate(-37.000000, -504.000000)" stroke={color} strokeWidth="2">
          <g id="Apps" transform="translate(35.055556, 376.025907)">
            <g id="check-square" transform="translate(2.944444, 128.984456)">
              <polyline id="Path" points="5.05263158 7.1208072 7.57894737 9.7911099 16 0.8901009"></polyline>
              <path d="M15.1578947,8.0109081 L15.1578947,14.2416144 C15.1578947,15.2247927 14.403848,16.0218162 13.4736842,16.0218162 L1.68421053,16.0218162 C0.754046737,16.0218162 0,15.2247927 0,14.2416144 L0,1.7802018 C0,0.797023494 0.754046737,0 1.68421053,0 L10.9473684,0" id="Path"></path>
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  )
}

export default memo(CheckSquareIcon);
