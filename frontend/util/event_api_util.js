export const fetchEvents = (limit) => (
  $.ajax({
    method: 'GET',
    url: 'api/events',
    data: { limit }
  })
);

export const fetchEvent = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/events/${id}`
  })
);

export const createEvent = (event) => {
  return $.ajax({
    method: 'POST',
    url: 'api/events',
    data: { event }
  });
};

export const updateEvent = (event) => (
  $.ajax({
    method: 'PATCH',
    url: `api/events/${event.id}`,
    data: { event }
  })
);

export const filterByCategory = (limit, category) => (
  $.ajax({
    method: 'GET',
    url: 'api/events',
    data: { limit, category }
  })
);
