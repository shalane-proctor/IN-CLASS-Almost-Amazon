import { deleteBook } from '../../api/bookData';
import { showBooks } from '../components/pages/books';
import viewBookDetails from '../../api/mergedData';
import viewBook from '../components/pages/viewBook';
import { deleteSingleAuthor, favoriteAuthors } from '../../api/authorData';
import { showAuthors } from '../components/pages/authors';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteBook(firebaseKey).then((booksArray) => showBooks(booksArray));
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      console.warn('ADD BOOK');
    }

    // TODO: CLICK EVENT EDITING/UPDATING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      console.warn('EDIT BOOK', e.target.id);
      console.warn(e.target.id.split('--'));
    }
    // TODO: CLICK EVENT FOR VIEW BOOK DETAILS
    if (e.target.id.includes('view-book-btn')) {
      const [, bookFirebaseKey] = e.target.id.split('--');
      viewBookDetails(bookFirebaseKey).then((bookAuthorObj) => {
        viewBook(bookAuthorObj);
      });
    }

    // FIXME: ADD CLICK EVENT FOR DELETING AN AUTHOR
    if (e.target.id.includes('delete-author-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, authorFirebaseKey] = e.target.id.split('--');
        deleteSingleAuthor(authorFirebaseKey).then((authorArray) => showAuthors(authorArray));
      }
    }

    if (e.target.id.includes('author-favorite')) {
      const [, authorFavoriteFirebaseKey] = e.target.id.split('--');
      favoriteAuthors(authorFavoriteFirebaseKey).then((authorFavoriteArray) => showAuthors(authorFavoriteArray));
    }

    // FIXME: ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('add-author-btn')) {
      console.warn('ADD AUTHOR');
    }
    // FIXME: ADD CLICK EVENT FOR EDITING AN AUTHOR
  });
};

export default domEvents;
