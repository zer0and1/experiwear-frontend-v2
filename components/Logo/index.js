
import { memo } from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import LINKS from 'utils/constants/links'
import { LOGO_IMAGE_PATH } from 'utils/constants/image-paths'

const useStyles = makeStyles(() => ({
  picture: {
    display: 'flex',
  },
  img: props => ({
    width: props.width,
    objectFit: 'contain'
  })
}));

const Logo = ({
  width = 166,
  className,
  ...rest
}) => {
  const classes = useStyles({ width });

  return (
    <Link href={LINKS.HOME.HREF}>
      <a>
        <picture className={clsx(classes.picture, className)} {...rest}>
          <source srcSet={LOGO_IMAGE_PATH} />
          <img
            className={classes.img}
            src={LOGO_IMAGE_PATH}
            alt='logo' />
        </picture>
      </a>
    </Link>
  )
}

export default memo(Logo);
