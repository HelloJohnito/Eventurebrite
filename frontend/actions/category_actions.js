import * as APIUtil from '../util/category_api_util';

export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';

export const fetchAllCategories = () => dispatch => (
  APIUtil.fetchCategories().then( categories => (
    dispatch(receiveAllCategories(categories))
  ))
);

const receiveAllCategories = (categories) => ({
  type: RECEIVE_ALL_CATEGORIES,
  categories
});


////////////////////////////////////////////////////////////////////
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

export const fetchCategory = () => dispatch => (
  APIUtil.fetchCategory().then( category => (
    dispatch(receiveCategory(category))
  ))
);

const receiveCategory = (category) => ({
  type: RECEIVE_CATEGORY,
  category
});
