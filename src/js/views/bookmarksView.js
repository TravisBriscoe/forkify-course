import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';
import View from './View.js';

class BookmarksView extends View {
  _parentEl = document.querySelector('.bookmarks__list');
  _errorMsg = 'No bookmakrs yet. Find a nice recipe and bookmark it';
  _successMsg = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
  _generateMarkup() {
    return this._data
      .map(bookmarks => previewView.render(bookmarks, false))
      .join('');
  }
}

export default new BookmarksView();
