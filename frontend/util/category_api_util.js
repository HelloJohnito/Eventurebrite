// fetch by category ID

export const fetchCategories = () => (
  $.ajax({
    method: 'GET',
    url: 'api/categories',
  })
);

export const fetchCategory = (categoryId) => (
  $.ajax({
    method: 'GET',
    url: `api/categories/${categoryId}`,
  })
);

//check
// export const createCategory = (eventId) => (
//   $.ajax({
//     method: 'POST',
//     url: 'api/categories',
//     data: { eventId }
//   })
// );
