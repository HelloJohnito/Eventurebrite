import * as ApiUtil from '../util/category_api_util';

export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';

export const fetchAllCategories = () => dispatch => (
  ApiUtil.fetchCategories().then( categories => (
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
  ApiUtil.fetchCategory().then( category => (
    dispatch(receiveCategory(category))
  ))
);

const receiveCategory = (category) => ({
  type: RECEIVE_CATEGORY,
  category
});
