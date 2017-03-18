import * as ApiUtil from '../util/category_api_util';

export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';
// export const CREATE_CATEGORY = 'CREATE_CATEGORY';

export const fetchAllCategories = () => dispatch => (
  ApiUtil.fetchCategories().then( categories => (
    dispatch(receiveAllCategories(categories))
  ))
);

export const fetchCategory = (id) => dispatch => (
  ApiUtil.fetchCategory(id).then( category => (
    dispatch(receiveCategory(category))
  ))
);

// export const createCategory


const receiveAllCategories = (categories) => ({
  type: RECEIVE_ALL_CATEGORIES,
  categories
});

const receiveCategory = (category) => ({
  type: RECEIVE_CATEGORY,
  category
});

// const createCategory = (category) => ({
//   type: CREATE_CATEGORY,
//   category
// });
