(function () {

  const spinner = document.querySelector('.spinner');
  const header = document.querySelector('.header');
  const articlesContainer = document.querySelector('.articles');
  const arrayTags = [];
  spinner.style.display = 'block';

  function loadAjax(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4)
        if (xhr.status >= 200 && xhr.status < 400) {
          const res = JSON.parse(xhr.responseText);
          callback(res);
        } else {
          spinner.style.display = 'none';
          articlesContainer.textContent = `Hay un error cuando intentamos cargar los recursos..., ${xhr.statusText}`;
        }
    };
    xhr.send();
  }

  function onClickButton($event) {

    const h2 = document.createElement('h2');
    header.appendChild(h2);

    const arrayConditions = [$event.target.nodeName === 'A', $event.target.dataset.id !== '', $event.isTrusted];

    const isTagA = arrayConditions.every(item => item === true);

    if (isTagA) {

      spinner.style.display = 'block';

      articlesContainer.innerHTML = '';

      const button = document.createElement('BUTTON');
      button.textContent = 'Volver';

      button.addEventListener('click', back, false);

      const idSelected = $event.target.dataset.id;
      const url = `http://api.nytimes.com/svc/books/v3/lists/${idSelected}.json?api-key=${config.API_KEY}`;

      loadAjax(url, function (data) {
        spinner.style.display = 'none';

        h2.textContent = data.results.display_name + ' ( ' + data.results.previous_published_date + ' )';

        const res = data.results.books;
        header.appendChild(button);

        res.forEach(function (item) {

          arrayTags.length = 0;

          _createElement({tag:'h3', mount: 1});
          _createElement({tag:'img', mount: 1});
          _createElement({tag:'small', mount: 1});
          _createElement({tag:'p', mount: 1});
          _createElement({tag:'a', mount: 1});

          _addTextToElement([
            '# ' + item.rank + ' ' + item.title,
            ,
            item.description,
            'Semanas en lista: ' + item.weeks_on_list,
            'Comprar'
          ]);

          _setAttributesToTag('IMG', 'src', item.book_image);
          _setAttributesToTag('A', 'target', '_blank');
          _setAttributesToTag('A', 'href', item.amazon_product_url);

          _attachElementsToDOM(arrayTags);

        });
      });
    }
  }

  function init() {

    spinner.style.display = 'block';

    const url = `http://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${config.API_KEY}`;

    loadAjax(url, function (data) {

      spinner.style.display = 'none';

      const h1 = document.createElement('H1');
      header.appendChild(h1);

      const res = data.results;

      h1.textContent = 'Best sellers list';
      articlesContainer.addEventListener('click', onClickButton, false);

      res.forEach(function (item) {

        arrayTags.length = 0;

        _createElement({tag:'h3', mount: 1});
        _createElement({tag:'p', mount: 3});
        _createElement({tag:'a', mount: 1});

        _addTextToElement([
          item.display_name,
          `Oldest: ${item.newest_published_date}`,
          `Newest: ${item.oldest_published_date}`,
          `Updated: ${item.updated}`,
          'Read more'
        ]);

        _setAttributesToTag('A', 'data-id', item.list_name);
        _setAttributesToTag('A', 'href', '#');

        _attachElementsToDOM(arrayTags);

      });
    });
  }

  function _createElement(obj) {
    if (obj.mount > 1) {
      for (let i = 0; i < obj.mount; i++) {
        arrayTags.push(document.createElement(obj.tag));
      }
    } else {
      arrayTags.push(document.createElement(obj.tag));
    }
  }

  function _addTextToElement(array) {
    arrayTags.forEach((element, index) => {

      element.textContent = array[index];

    });
  }

  function _attachElementsToDOM (array) {
    const article = document.createElement('ARTICLE');
    array.forEach(item => {
      article.appendChild(item);
    });
    articlesContainer.appendChild(article);
  }

  function _setAttributesToTag(node, attribute, src) {
    arrayTags.forEach(item => {
      if (item.tagName === node) {
        item.setAttribute(attribute, src);
      }
    });
  }

  function back() {
    const childrenOfHeader = document.querySelector('.header').children;

    for (let i = childrenOfHeader.length - 1; i > 0; i--) {
      childrenOfHeader[i].remove();
    }
    articlesContainer.innerHTML = '';
    init();
  }

  init();

})();