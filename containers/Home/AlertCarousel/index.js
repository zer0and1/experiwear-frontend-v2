import { memo } from 'react'
import { Card, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import LinkButton from 'components/UI/Buttons/LinkButton'
import LINKS from 'utils/constants/links'

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
          results.map((item, index) =>
            <div key={index}>
              <img
                alt='carousel'
                src={item.image}
                className={classes.image}
              />
              <div className={classes.container}>
                <Typography className={classes.title}>
                  {item.title}
                </Typography>
                <Typography className={classes.text}>
                  {item.text}
                </Typography>
              </div>
              <LinkButton
                href={LINKS.NEWS.HREF}
                className={classes.addButton}
              >
                + Create New Alert
              </LinkButton>
            </div>
          )
        }
      </Carousel>
    </Card>
  );
};

export default memo(AlertCarousel);

const results = [
  {
    title: 'Trae Young in East Hot Spotlight',
    text: 'Only 21 and in his second season in the NBA, Atlanta\'s Trae Young is already an All-Star.',
    sent: 28392,
    sentPercent: 1,
    open: 26623,
    openPercent: 0.84,
    image: 'https://images.unsplash.com/photo-1585071258252-369a36d89e30?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGJhc2tldGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    createdAt: '2021-03-20T15:00:00.000Z'
  },
  {
    title: 'Hawks’ film session puts spotlight on Trae Young, early growing pains',
    text: '“Trae is my brother regardless,” Collins, who chose not to elaborate further, told The Athletic via text message when he was asked about the situation.',
    sent: 28392,
    sentPercent: 1,
    open: 26623,
    openPercent: 0.84,
    image: 'https://images.unsplash.com/photo-1581390720109-23c7bd595f3c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGJhc2tldGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    createdAt: '2021-03-20T15:00:00.000Z'
  },
  {
    title: 'Trae Young, Mo Bamba are ready for the NBA spotlight',
    text: 'He led the nation in points (27.4) and assists (8.8) this season. At one point, his Oklahoma Sooners were the hottest thing in college basketball.',
    sent: 28392,
    sentPercent: 1,
    open: 26623,
    openPercent: 0.84,
    image: 'https://images.unsplash.com/photo-1522029928090-697e845b8038?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTh8fGJhc2tldGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    createdAt: '2021-03-20T15:00:00.000Z'
  }
]