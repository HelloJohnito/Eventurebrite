import * as APIUtil from '../util/ticket_api_util';

export const RECEIVE_ALL_BOOKMARKS = "RECEIVE_ALL_BOOKMARKS";
export const RECEIVE_BOOKMARK = "RECEIVE_BOOKMARK";
export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";

export const fetchAllBookmarks = () => dispatch => (
  APIUtil.fetchAllBookmarks().then( bookmarks =>(
    dispatch(receiveAllBookmarks(bookmarks))
  ))
);

export const fetchBookmark = (id) => dispatch => (
    APIUtil.fetchBookmark(id).then( bookmark => ( dispatch(receiveBookmark(bookmark))
  ))
);

export const createBookmark = (bookmark) => dispatch => (
  APIUtil.createBookmark(bookmark).then( bookmark => (
    dispatch(receiveBookmark(bookmark))
  ))
);

export const deleteBookmark = (id) => dispatch => (
  APIUtil.deleteBookmark(id).then( bookmark => dispatch(removeBookmark(bookmark)))
);

const receiveAllBookmarks = (bookmarks) => ({
  type: RECEIVE_ALL_BOOKMARKS,
  bookmarks
});

const receiveBookmark = (bookmark) => ({
  type: RECEIVE_BOOKMARK,
  bookmark
});

const removeBookmark = (bookmark) => ({
  type: REMOVE_BOOKMARK,
  bookmark
});
