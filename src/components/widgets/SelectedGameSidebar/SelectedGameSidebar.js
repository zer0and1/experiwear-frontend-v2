import { Fragment, useEffect } from 'react';
import { Calendar, Checkbox, Title } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAlertToShow,
  setSelectedDate,
} from 'redux/actions/getNotifications';
import { useRouter } from 'next/router';
import LINKS from 'utils/constants/links';

const SelectedGameSidebar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    selectedDate,
    alertStatus: cellData,
    alertsToShow,
  } = useSelector((state) => state.notifications);
  const { selectedGame } = useSelector((state) => state.games);

  const handleDateChange = (date) => {
    dispatch(setSelectedDate(date));
  };

  const handleVisibilityChange = (e) => {
    dispatch(setAlertToShow(e.target.name, e.target.checked));
  };

  useEffect(() => {
    selectedGame || router.push(LINKS.home.path);
  }, [selectedGame, router]);

  return (
    <Fragment>
      <Title mb={3}>Calendar</Title>
      <Calendar
        value={selectedDate}
        minimized={true}
        cellData={cellData}
        onChange={handleDateChange}
        mb={8}
      />
      <Title mb={3}>Alerts to show</Title>
      <Checkbox
        label="News"
        color="news"
        name="news"
        checked={alertsToShow.news}
        onChange={handleVisibilityChange}
      />
      <Checkbox
        label="Survey"
        color="survey"
        name="survey"
        checked={alertsToShow.survey}
        onChange={handleVisibilityChange}
      />
      <Checkbox
        label="Score"
        color="score"
        name="score"
        checked={alertsToShow.score}
        onChange={handleVisibilityChange}
      />
      <Checkbox
        label="Promo"
        color="promo"
        name="promo"
        checked={alertsToShow.promo}
        onChange={handleVisibilityChange}
      />
    </Fragment>
  );
};

export default SelectedGameSidebar;
