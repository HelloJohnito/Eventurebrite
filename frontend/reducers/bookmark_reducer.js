import { RECEIVE_ALL_BOOKMARKS, RECEIVE_BOOKMARK, REMOVE_BOOKMARK } from '../actions/bookmark_actions';
import merge from 'lodash/merge';

const BookmarkReducer = (state = {}, action ) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_BOOKMARKS:
      return merge({}, action.bookmarks);
    // case RECEIVE_BOOKMARK:
    //   const newBookmark = {[action.bookmark.id]: action.bookmark};
    //   return merge({}, state, newBookmark);
    // case REMOVE_BOOKMARK:
    //   const newState = merge({}, state);
    //   delete newState [action.bookmark.id];
    //   return newState;
    default:
      return state;
  }
};

export default BookmarkReducer;
