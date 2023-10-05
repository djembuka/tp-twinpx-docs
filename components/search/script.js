window.addEventListener('load', () => {
  //expand search on focus
  document
    .querySelector('.header-search__input')
    .addEventListener('focus', () => {
      document.querySelector('header').classList.add('header--search-focus');
    });
  //minimize search on blur
  document
    .querySelector('.header-search__input')
    .addEventListener('blur', () => {
      document.querySelector('header').classList.remove('header--search-focus');
    });
});
