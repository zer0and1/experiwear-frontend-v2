
import { memo } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Tabs,
  Tab
} from '@material-ui/core'

const StyledTabs = withStyles((theme) => ({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: 4,
    '& > span': {
      width: '100%',
      backgroundColor: theme.palette.primary.main,
    },
  },
}))((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    fontSize: 16,
    fontWeight: 600,
    minWidth: 'unset',
    padding: theme.spacing(0, 0, 2),
    margin: theme.spacing(0, 1.5),
    '&:focus': {
      opacity: 1,
      color: theme.palette.primary.main
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(0, 1),
    }
  },
  selected: {
    opacity: 1,
    color: theme.palette.primary.main
  }
}))((props) => <Tab disableRipple {...props} />);

const MagicTableTabs = ({
  tabs,
  tab,
  setTab
}) => {

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tabHandler = (event, value) => {
    setTab(value);
  };

  return (
    <StyledTabs
      value={tab}
      onChange={tabHandler}
      aria-label='styled tabs'
    >
      {
        tabs.map((item) =>
          <StyledTab
            key={item}
            label={item}
            value={item}
          />
        )
      }
    </StyledTabs>
  )
};

export default memo(MagicTableTabs);
