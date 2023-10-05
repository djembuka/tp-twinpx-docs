window.addEventListener('load', () => {
  document.querySelectorAll('.menu-collapse').forEach((menu) => {
    const menuWidth = menu.clientWidth;
    const items = menu.querySelectorAll('a, span');
    let itemsWidth = 0;
    let edgeIndex;

    items.forEach((item, index) => {
      itemsWidth += item.clientWidth;
      if (itemsWidth + index * 50 > menuWidth && edgeIndex === undefined) {
        edgeIndex = index - 1;
      }
    });

    if (edgeIndex === items.length) {
      return;
    }

    const moreButton = document.createElement('div');
    moreButton.classList.add('menu-collapse__more');
    menu.appendChild(moreButton);

    const subMenu = document.createElement('div');
    subMenu.classList.add('menu-collapse__sub');
    moreButton.appendChild(subMenu);

    items.forEach((item, index) => {
      if (index > edgeIndex) {
        subMenu.appendChild(item);
      }
    });

    let showInterval;
    moreButton.addEventListener('mouseenter', () => {
      clearInterval(showInterval);
      moreButton.classList.add('menu-collapse__more--show');
    });
    moreButton.addEventListener('mouseleave', () => {
      showInterval = setTimeout(() => {
        moreButton.classList.remove('menu-collapse__more--show');
      }, 200);
    });
  });
});
