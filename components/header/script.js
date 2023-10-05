window.addEventListener('load', () => {
  let headerElem = document.querySelector('header'),
    headerFullMenu = headerElem.querySelector('.full-menu'),
    headerOpacoTimeoutId,
    headerOpacoDisplayTimeoutId;

  headerFullMenu.addEventListener('mouseenter', () => {
    clearTimeout(headerOpacoTimeoutId);
    clearTimeout(headerOpacoDisplayTimeoutId);

    //show opaco
    headerElem.classList.add('header--opaco');
    headerElem.classList.add('header--animate-opaco');

    //show dropdown
    headerElem.classList.add('full-menu-dropdown--show');
    //pointer events
    headerOpacoTimeoutId = setTimeout(function () {
      headerElem.classList.add('full-menu-dropdown--active');
    }, 10);
  });

  headerFullMenu.addEventListener('mouseleave', () => {
    clearTimeout(headerOpacoTimeoutId);
    clearTimeout(headerOpacoDisplayTimeoutId);

    headerOpacoTimeoutId = setTimeout(function () {
      //animate opaco
      headerElem.classList.remove('header--animate-opaco');
      //animate dropdown
      headerElem.classList.remove('full-menu-dropdown--show');
      headerElem.classList.remove('full-menu-dropdown--active');

      headerOpacoDisplayTimeoutId = setTimeout(function () {
        //hide opaco
        headerElem.classList.remove('header--opaco');
      }, 500);
    }, 500);
  });
});
