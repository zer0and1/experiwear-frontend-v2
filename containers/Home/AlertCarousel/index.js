import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import LinkButton from 'components/UI/Buttons/LinkButton'
import LINKS from 'utils/constants/links'
import { IMAGE_PLACEHOLDER_IMAGE_PATH } from 'utils/constants/image-paths'
import getLatestNewsNotifications from 'actions/getLatestNewsNotifications'
import { isEmpty } from 'utils/helpers/utility'

const useStyles = makeStyles((theme) => ({
  carousel: {
    position: 'relative',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 320,
    objectFit: 'cover',
  },
  container: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: theme.spacing(2),
    bottom: theme.spacing(3)
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 1,
    color: theme.custom.palette.white,
    marginBottom: theme.spacing(1)
  },
  text: {
    fontSize: 14,
    lineHeight: 1,
    color: theme.custom.palette.white,
  },
  addButton: {
    position: 'absolute',
    top: 10,
    right: 12,
    fontSize: 14,
    color: theme.custom.palette.white,
    textDecoration: 'underline'
  }
}));

const AlertCarousel = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { latestNews = [] } = useSelector(state => state.notifications)

  useEffect(() => {
    dispatch(getLatestNewsNotifications())
  }, [dispatch])

  return (
    <Card>
      <Carousel
        infiniteLoop
        autoPlay={true}
        interval={1500}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        showIndicators={true}
        className={classes.carousel}
      >
        {
          !isEmpty(latestNews) &&
          latestNews.map((item, index) =>
            <div key={index}>
              <img
                alt='carousel'
                src={item.imageUrl || IMAGE_PLACEHOLDER_IMAGE_PATH}
                className={classes.image}
              />
              <div className={classes.container}>
                <Typography className={classes.title}>
                  {item.title}
                </Typography>
                <Typography className={classes.text}>
                  {item.body}
                </Typography>
              </div>
              <LinkButton
                href={LINKS.NEWS.HREF}
                className={classes.addButton}
              >
                + Create News Alert
              </LinkButton>
            </div>
          )
        }
      </Carousel>
    </Card>
  );
};

export default memo(AlertCarousel);