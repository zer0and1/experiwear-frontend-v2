import { memo, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import List from '@material-ui/core/List'

import SideDrawerListItem from './SideDrawerListItem'
import SIDEBAR_MENU from 'utils/constants/sidebar-menu'

const SideDrawerList = () => {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    const routerIndex = SIDEBAR_MENU.findIndex((item) => item.HREF === router.pathname)
    setSelectedIndex(routerIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const onMenuHandler = index => () => {
    if (selectedIndex !== index) {
      setSelectedIndex(index)
    } else {
      setSelectedIndex(-1);
    }
  }

  return (
    <List>
      {
        SIDEBAR_MENU.map((menu, index) =>
          <SideDrawerListItem
            key={index}
            menu={menu}
            selected={index === selectedIndex}
            onMenu={onMenuHandler(index)}
          />
        )
      }
    </List>
  );
}

export default memo(SideDrawerList);