
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import clsx from 'clsx'

const useStyles = makeStyles(() => ({
  root: {
    width: 16
  }
}));

const CheckSquareIcon = ({
  isActive = false,
  className,
  viewBox,
  ...rest
}) => {
  const classes = useStyles();
  const color = isActive ? '#01a1c3' : '#9ea3ba';

  return (
    <SvgIcon viewBox={viewBox || '0 0 11.38 16'} {...rest} className={clsx(classes.root, className)}>
      <g fill="none" stroke="none">
        <path d="m2.686 11.829-.46-.946a.752.752 0 0 0-.324-.336L.4 9.75a.752.752 0 0 1-.365-.887l.534-1.709a.752.752 0 0 0 0-.448L.034 4.997A.752.752 0 0 1 .4 4.11l1.502-.797a.752.752 0 0 0 .324-.335l.755-1.554A.752.752 0 0 1 3.9 1.04l1.55.529a.752.752 0 0 0 .485 0l1.55-.529a.752.752 0 0 1 .919.384l.755 1.553c.07.143.183.26.324.336l1.503.797c.32.17.472.542.365.887l-.534 1.709a.752.752 0 0 0 0 .448l.534 1.709a.752.752 0 0 1-.366.888l-1.502.797a.752.752 0 0 0-.324.335l-.46.946V17l-3.006-1.02L2.686 17v-5.172.001zm1.503.892v2.18l1.504-.51 1.503.511v-2.18l-1.26-.43a.752.752 0 0 0-.486 0l-1.26.43zm3.618-2.495c.21-.43.55-.783.972-1.007l.95-.504-.347-1.112a2.255 2.255 0 0 1 0-1.346l.347-1.112-.95-.504a2.255 2.255 0 0 1-.972-1.007l-.465-.956-.922.314c-.472.16-.983.16-1.455 0l-.922-.314-.465.957c-.21.43-.55.782-.972 1.006l-.95.504.347 1.112c.137.438.137.908 0 1.346l-.347 1.112.95.504c.423.224.763.577.972 1.007l.465.956.922-.314c.472-.16.983-.16 1.455 0l.922.314.465-.956zM5.693 4.675c.415 0 .751.336.751.752v3.006a.752.752 0 1 1-1.503 0V5.427c0-.416.336-.752.752-.752z" fill={color} fillRule="nonzero" />
      </g>
    </SvgIcon>
  )
}

export default memo(CheckSquareIcon);
