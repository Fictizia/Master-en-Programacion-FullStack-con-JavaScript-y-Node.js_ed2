(function () {

  const input = document.querySelector('input');
  input.addEventListener('keyup', searchUser, false);
  const container = document.querySelector('.container');

  function searchUser($event) {

    if ($event.code === 'Enter' && $event.isTrusted) {

      if (input.value.trim() === '') {

        const p = document.createElement('P');
        container.appendChild(p);
        p.textContent = 'Please enter username';
        return false;

      } else {

        if (document.querySelector('ul') !== null) {
          document.querySelector('ul').remove();
        }

        const text = input.value.trim();

        loadAjax(`https://api.github.com/search/users?q=${text}+in%3Afullname&type=Users`)
          .then(getNetwork)
          .catch(error => console.log(error));

      }
    }
  }

  function loadAjax(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(json => json.json())
        .then(resolve)
        .catch(reject);
    })
  }

  function getNetwork(urlNetwork) {
    const users = urlNetwork.items;

    if (users && users.length) {

      users.forEach(function (item) {

        const followers = new Promise( (resolve, reject) => {
          loadAjax(`https://api.github.com/users/${item.login}/followers`)
            .then(resolve)
        })

        const followings = new Promise( (resolve, reject) => {
          loadAjax(`https://api.github.com/users/${item.login}/following`)
            .then(resolve)
        })

        createContainerUser(item, followers, followings);
      });
    } else {
      feedBackMessage('No users found');
    }
  }

  function createContainerUser(item, followers, followings) {
    const ul = document.createElement('UL');
    const li = document.createElement('LI');
    const img = document.createElement('IMG');
    const div = document.createElement('DIV');
    div.setAttribute('class', 'user-details');

    const divScore = document.createElement('DIV');

    li.appendChild(document.createTextNode(item.login));

    divScore.innerHTML = `Score: <span>${item.score.toFixed(2)}</span>`;

    img.setAttribute('src', item.avatar_url);

    ul.appendChild(li);
    li.appendChild(img);
    li.appendChild(div);
    div.appendChild(divScore);
    container.appendChild(ul);

    getFollowers(followers, div);
    getFollowings(followings, div);
  }

  function getFollowers (followers, div) {
    followers.then( res => {
      const divFollower = document.createElement('DIV');
      divFollower.innerHTML = `Followers: <span>${res.length}</span>`;
      div.appendChild(divFollower);
    });
  }

  function getFollowings(followings, div) {
    followings.then( res => {
      const divFollowing = document.createElement('DIV');
      divFollowing.innerHTML = `Followings: <span>${res.length}</span>`;
      div.appendChild(divFollowing);
    });
  }

})();
