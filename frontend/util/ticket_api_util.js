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

export const createTicket = (eventId) => (
  $.ajax({
    method: "POST",
    url: "api/tickets",
    data: { eventId }
  })
);

export const deleteTicket = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/tickets/${id}`
  })
);
