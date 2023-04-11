const {
  addBooks, getAllBooks, getBookById, edtBookById, delBookById,
} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },
  {
    method: 'POST',
    path: '/books',
    handler: addBooks,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookById,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: edtBookById,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: delBookById,
  },
];

module.exports = routes;
