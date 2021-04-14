
import LINKS from 'utils/constants/links'
import HomeIcon from 'components/Icons/HomeIcon'
import MailIcon from 'components/Icons/MailIcon'
import MessageSquareIcon from 'components/Icons/MessageSquareIcon'
import CheckSquareIcon from 'components/Icons/CheckSquareIcon'
import DealIcon from 'components/Icons/DealIcon'
import CalendarIcon from 'components/Icons/CalendarIcon'

const HOME_MENU = {
  ICON: HomeIcon,
  HREF: LINKS.HOME.HREF,
  TITLE: LINKS.HOME.TITLE
}

const SECONDARY_SIDEBAR_MENU = [
  {
    ICON: MailIcon,
    HREF: LINKS.NEWS.HREF,
    TITLE: LINKS.NEWS.TITLE
  },
  {
    ICON: MessageSquareIcon,
    HREF: LINKS.SURVEY.HREF,
    TITLE: LINKS.SURVEY.TITLE
  },
  {
    ICON: CheckSquareIcon,
    HREF: LINKS.SCORE.HREF,
    TITLE: LINKS.SCORE.TITLE
  },
  {
    ICON: DealIcon,
    HREF: LINKS.PROMO.HREF,
    TITLE: LINKS.PROMO.TITLE
  },
  {
    ICON: CalendarIcon,
    HREF: LINKS.SCHEDULE.HREF,
    TITLE: LINKS.SCHEDULE.TITLE
  },
  {
    ICON: CalendarIcon,
    HREF: LINKS.ACCELEROMETER.HREF,
    TITLE: LINKS.ACCELEROMETER.TITLE
  },
]

export {
  HOME_MENU,
  SECONDARY_SIDEBAR_MENU
};
