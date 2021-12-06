import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import { TicketForm } from 'components';
import { useAsyncAction } from 'hooks';
import { getTickets, modifyTicket, removeTicket } from 'redux/actions';

const TicketModify = ({ ticketId }) => {
  const dispatch = useDispatch();
  const ticketData = useSelector((state) =>
    state.main.tickets.results.find((t) => t.id === ticketId)
  );

  const handleSubmit = async (data) => {
    await dispatch(modifyTicket(ticketId, data));
  };

  const handleDelete = async () => {
    await dispatch(removeTicket(ticketId));
  };

  useAsyncAction(getTickets(), !ticketData);

  return (
    <Card>
      <CardHeader title="Modify Ticket" />
      <CardContent>
        {ticketData && (
          <TicketForm
            defaultValues={ticketData}
            onSumbit={handleSubmit}
            onDelete={handleDelete}
            updating
          />
        )}
      </CardContent>
    </Card>
  );
};

export default memo(TicketModify);
