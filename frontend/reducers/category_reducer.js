import { RECEIVE_ALL_CATEGORIES, RECEIVE_CATEGORY } from '../actions/category_actions';
import merge from 'lodash/merge';

const CategoryReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_ALL_CATEGORIES:
      return merge({}, action.categories);
    case RECEIVE_CATEGORY: 
      return merge({}, action.category);
    default:
      return state;
  }
};
