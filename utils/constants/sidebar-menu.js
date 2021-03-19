
import AnalyticIcon from '@material-ui/icons/PollOutlined'
import UserIcon from '@material-ui/icons/PeopleAltOutlined'

import LINKS from 'utils/constants/links'

const SIDEBAR_MENU = [
  {
    ICON: <AnalyticIcon />,
    HREF: LINKS.HOME.HREF,
    TITLE: LINKS.HOME.TITLE
  },
  {
    ICON: <UserIcon />,
    HREF: LINKS.USER.HREF,
    TITLE: LINKS.USER.TITLE
  },
]

export default SIDEBAR_MENU;