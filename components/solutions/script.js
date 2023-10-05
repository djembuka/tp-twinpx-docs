window.addEventListener('load', () => {
  document.querySelectorAll('.solutions').forEach((solutions) => {
    solutions.addEventListener('click', async (e) => {
      e.preventDefault();
      if (!e.target.classList.contains('button')) {
        return;
      }
      const button = e.target;
      //const response = fetch(button.getAttribute('data-url'));
      //let result = await response.text();
      result = `
      <div class="solutions__item col-12 col-sm-6 col-lg-4">
        <div class="solutions__item__image"></div>
        <div class="solutions__item__title">Название решения</div>
        <div class="solutions__item__text">
          Описание решения, которое также будет выводится в меню шапки сайта.
        </div>
      </div>
      <div class="solutions__item col-12 col-sm-6 col-lg-4">
        <div class="solutions__item__image"></div>
        <div class="solutions__item__title">Название решения</div>
        <div class="solutions__item__text">
          Описание решения, которое также будет выводится в меню шапки сайта.
        </div>
      </div>
      <div class="solutions__item col-12 col-sm-6 col-lg-4">
        <div class="solutions__item__image"></div>
        <div class="solutions__item__title">Название решения</div>
        <div class="solutions__item__text">
          Описание решения, которое также будет выводится в меню шапки сайта.
        </div>
      </div>
      <div class="solutions__item col-12 col-sm-6 col-lg-4">
        <div class="solutions__item__image"></div>
        <div class="solutions__item__title">Название решения</div>
        <div class="solutions__item__text">
          Описание решения, которое также будет выводится в меню шапки сайта.
        </div>
      </div>
      <div class="solutions__item col-12 col-sm-6 col-lg-4">
        <div class="solutions__item__image"></div>
        <div class="solutions__item__title">Название решения</div>
        <div class="solutions__item__text">
          Описание решения, которое также будет выводится в меню шапки сайта.
        </div>
      </div>
      <div class="solutions__item col-12 col-sm-6 col-lg-4">
        <div class="solutions__item__image"></div>
        <div class="solutions__item__title">Название решения</div>
        <div class="solutions__item__text">
          Описание решения, которое также будет выводится в меню шапки сайта.
        </div>
      </div>
      <div class="text-center solutions__more">
        <div
          class="button button--xl button--gray"
          data-url="./components/solutions/download.html?PAGEN_1=3"
        >
          Больше
        </div>
      </div>
    `;

      const row = document.createElement('div');
      row.classList.add('row');
      row.innerHTML = result;

      const more = row.querySelector('.solutions__more');

      solutions.querySelector('.solutions__more').remove();
      solutions.querySelector('.row:last-of-type').after(row);
      row.after(more);

      window.scrollTo({
        top: row.getBoundingClientRect().top + window.scrollY - 20,
        behavior: 'smooth',
      });
    });
  });
});
