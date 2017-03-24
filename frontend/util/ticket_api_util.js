export const fetchAllTickets = () => (
  $.ajax({
    method: "GET",
    url: 'api/tickets'
  })
);

export const fetchTicket = (id) => (
  $.ajax({
    method: "GET",
    url: `api/tickets/${id}`
  })
);

export const createTicket = (ticket) => {
  return (
  $.ajax({
    method: "POST",
    url: "api/tickets",
    data: { ticket }
  })
);}

export const deleteTicket = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/tickets/${id}`
  })
);
