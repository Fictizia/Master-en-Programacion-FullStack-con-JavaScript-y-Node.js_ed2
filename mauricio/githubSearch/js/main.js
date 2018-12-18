(function () {

  const input = document.querySelector('input');
  input.addEventListener('keyup', searchUser, false);
  const container = document.querySelector('.container');

  async function searchUser($event) {

    try {
      if ($event.code === 'Enter' && $event.isTrusted) {

        if (!input.value.trim()) {

          const p = document.createElement('P');
          container.appendChild(p);
          p.textContent = 'Please enter username';
          return false;

        } else {

          const isUl = document.querySelector('ul') !== null;

          if (isUl) {
            document.querySelector('ul').remove();
          }

          const text = input.value.trim();

          const response = await callApi(`https://api.github.com/search/users?q=${text}+in%3Afullname&type=Users`);
          generateUserList(response);

        }
      }
    } catch (error) {
      console.log(error);
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
        .catch(error => console.log(error));
    })
  }

  async function callUserProfile(url) {
    try {
      return await ajax(url);
    } catch (error) {
      console.log(error);
    }
  }

  async function callApi(url) {
    try {
      return await ajax(url);
    } catch (error) {
      console.log(error);
    }
  }

  function generateUserList(data) {
    const ul = document.createElement('UL');
    container.appendChild(ul);

    const resArray = data.items;

    resArray.forEach(async function (item) {
      try {
        const urls = item.url;
        const netWorking = await callUserProfile(urls);
        const div = makeTemplate(item, netWorking);
        ul.insertAdjacentHTML('afterbegin', div);
      } catch (error) {
        console.log(error);
      }

    })
  }

  function makeTemplate(item, netWorking) {
    const template = `
      <li>${item.login}
        <a href="${item.html_url}" target="_blank">
          <img src="${item.avatar_url}">
        </a>
        <div class="user-details">
          <div>Score: 
            <span>${item.score.toFixed(2)}</span>
          </div>
          <div>
            <span>Followers: ${netWorking.followers}</span>
          </div>
          <div>
            <span>Followings: ${netWorking.following}</span>
          </div>
        </div>
       </li>
    `;

    return template;
  }

})();
