(() => {

  const input = document.querySelector('input');
  input.addEventListener('keyup', searchUser, false);
  const container = document.querySelector('.container');

  async function searchUser(event) {

    try {
      if (event.code === 'Enter' && event.isTrusted) {

        if (!!input.value.trim()) {

          if (document.querySelector('ul') !== null) {
            document.querySelector('ul').remove();
          }
          if (document.querySelector('p') !== null) {
            document.querySelector('p').remove();
          }

          const text = input.value.trim();

          const response = await callApi(`https://api.github.com/search/users?q=${text}+in%3Afullname&type=Users`);
          generateUserList(response);

        } else {
          const p = document.createElement('P');
          container.appendChild(p);
          p.textContent = 'Please enter username';
          return false;
        }
      }
    } catch (error) {
      console.log('searchUser', error);
    }

  }

  function ajax(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          if (response.status === 200) {
            resolve(response.json())
          } else {
            reject(response.json());
          }
        })
        .catch(error => console.log('ajax', error));
    })
  }

  async function callApi(url) {
    try {
      return await ajax(url);
    } catch (error) {
      console.log('callApi', error);
    }
  }

  function generateUserList(data) {
    if (data.items && data.items.length) {
      const ul = document.createElement('UL');
      container.appendChild(ul);

      const users = data.items;
      const urls = users.map(user => user.url);
      const request = urls.map(url => fetch(url).then(res => res.json()));

      Promise.all(request)
        .then(res => {
          res.forEach( item => {
            const div = makeTemplate(item);
            ul.insertAdjacentHTML('afterbegin', div);
          });
        })
        .catch(err => console.log(err));
    } else {
      const p = document.createElement('P');
      container.appendChild(p);
      p.textContent = 'Please enter a valid name';
      return false;
    }

  }

  function makeTemplate(item) {
    const template =
    `
      <li>${item.login}
        <a href="${item.html_url}" target="_blank">
          <img src="${item.avatar_url}">
        </a>
        <div class="user-details">
          <div>Score:
            <span></span>
          </div>
          <div>
            <span>Followers: ${item.followers}</span>
          </div>
          <div>
            <span>Followings: ${item.following}</span>
          </div>
        </div>
       </li>
    `;

    return template;
  }

})();
