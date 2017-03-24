export const fetchAllBookmarks = () => (
  $.ajax({
    method: "GET",
    url: 'api/bookmarks'
  })
);

export const fetchBookmark = (id) => (
  $.ajax({
    method: "GET",
    url: `api/bookmarks/${id}`
  })
);

export const createBookmark = (eventId) => {
  return(
    $.ajax({
      method: "POST",
      url: "api/bookmarks",
      data: { bookmark: {event_id: eventId} }
    })
  );
};

export const deleteBookmark = (eventId) => (
  $.ajax({
    method: "DELETE",
    url: `api/bookmarks/${eventId}`
  })
);
