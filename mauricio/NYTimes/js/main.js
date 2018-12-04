(function () {

  const spinner = document.querySelector('.spinner');
  const header = document.querySelector('.header');
  const articlesContainer = document.querySelector('.articles');
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

    if ($event.target.nodeName === 'A' && $event.target.id !== '' && $event.isTrusted) {

      spinner.style.display = 'block';

      articlesContainer.innerHTML = '';

      const button = document.createElement('BUTTON');
      button.textContent = 'Volver';

      button.addEventListener('click', back, false);

      const idSelected = $event.target.id;
      const url = `http://api.nytimes.com/svc/books/v3/lists/${idSelected}.json?api-key=${config.API_KEY}`;

      loadAjax(url, function (data) {
        spinner.style.display = 'none';

        h2.textContent = data.results.display_name + ' ( ' + data.results.previous_published_date + ' )';

        const res = data.results.books;
        header.appendChild(button);

        res.forEach(function (item) {

          createAndAppendListElement(item);

        });
      });
    }
  }

  function createAndAppendListElement(item) {
    const article = document.createElement('ARTICLE');
    const h3 = document.createElement('H3');
    const img = document.createElement('IMG');
    const small = document.createElement('SMALL');
    const p = document.createElement('P');
    const a = document.createElement('a');

    h3.textContent = '# ' + item.rank + ' ' + item.title;
    img.src = item.book_image;
    p.textContent = item.description;
    small.textContent = 'Semanas en lista: ' + item.weeks_on_list;
    a.textContent = 'Comprar';
    a.setAttribute('target', '_blank');
    a.href = item.amazon_product_url;

    articlesContainer.appendChild(article);
    article.appendChild(h3);
    article.appendChild(img);
    article.appendChild(small);
    article.appendChild(p);
    article.appendChild(a);
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

        createAndAppendList(item);

      });
    });
  }

  function createAndAppendList(item) {

    const article = document.createElement('ARTICLE');
    const h3 = document.createElement('H3');
    const p1 = document.createElement('P');
    const p2 = document.createElement('P');
    const p3 = document.createElement('P');
    const a = document.createElement('a');

    h3.textContent = item.display_name;
    p1.textContent = 'Oldest: ' + item.newest_published_date;
    p2.textContent = 'Newest: ' + item.oldest_published_date;
    p3.textContent = 'Updated: ' + item.updated;
    a.textContent = 'Read more';
    a.setAttribute('id', item.list_name);
    a.setAttribute('href', '#');

    articlesContainer.appendChild(article);
    article.appendChild(h3);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(a);

  }

  function back() {
    header.querySelector('h1').remove();
    header.querySelector('h2').remove();
    header.querySelector('button').remove();
    articlesContainer.innerHTML = '';
    init();
  }

  init();

})();