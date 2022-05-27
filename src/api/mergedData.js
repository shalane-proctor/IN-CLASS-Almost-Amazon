import { getSingleAuthor, getAuthorBooks } from './authorData';
import { getSingleBook } from './bookData';

const viewBookDetails = (bookFirebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(bookFirebaseKey).then((bookObject) => {
    getSingleAuthor(bookObject.author_id).then((authorObject) => {
      resolve({ authorObject, ...bookObject });
    });
  }).catch((error) => reject(error));
});

const viewAuthorDetails = (authorFirebaseKey) => new Promise((resolve, reject) => {
  getSingleAuthor(authorFirebaseKey).then((authorObject) => {
    getAuthorBooks(authorFirebaseKey).then((authorBooksArray) => {
      resolve({ authorBooksArray, ...authorObject });
    });
  }).catch((error) => reject(error));
});

export { viewBookDetails, viewAuthorDetails };
