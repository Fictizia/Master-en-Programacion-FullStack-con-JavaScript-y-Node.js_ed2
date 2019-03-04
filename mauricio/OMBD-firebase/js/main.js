const OMBDapp = (function () {

  var root = null;
  var useHash = true; // Defaults to: false
  var hash = '#!'; // Defaults to: '#'
  var router = new Navigo(root, useHash, hash);

  let searchInput;

  const key = API.key;

  const rootDB = firebase.database().ref();
  const users = rootDB.child("users");
  let uid;

  router
    .on('/', init)
    .on('/register', toggleLogin)
    .on('/perfil/:id', init)
    .resolve();

  function init() {
    toggleSpinner('show');
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        toggleSpinner('hide');
        document.querySelector('main').innerHTML = '';
        let template = '';
        template =
        `
        <div id="ombd-perfil">
          <p>hola <span id="ombd-user-name"></span> <button id="btn-logout">salir</button></p>
        </div>

        <div id="ombd-container">
          <div class="search">
            <input type="text" id="searchInput" />
            <button id="searchButton">Search</button>
          </div>
          <ul></ul>
        </div>
        `;

        document.querySelector('main').insertAdjacentHTML('afterbegin', template);
        document.querySelector('#btn-logout').addEventListener('click', logout, false);
        uid = firebase.auth().currentUser.uid;
        getUserName(uid);
        getDataFromDB(uid);
        searchInput = document.querySelector('#searchInput');
        searchButton = document.querySelector('#searchButton');
        searchButton.addEventListener('click', getValueInput, false);
      } else {
        toggleSpinner('hide');
        router.navigate('/');
        document.querySelector('main').innerHTML = '';
        let template = '';
        template =
        `
        <div id="ombd-login">
          <input id="login-email" type="text" placeholder="correo electrónico"/>
          <input id="login-password" type="password" placeholder="contraseña"/>
          <a href="#" id="login-login">entrar</a>
          <a href="#!/register" id="login-registro">regístrate con tu correo</aa>
        </div>
        `;

        document.querySelector('main').insertAdjacentHTML('afterbegin', template);
        document.querySelector('#login-login').addEventListener('click', loginByEmail, false);

      }
    });
  }

  function toggleLogin () {
    document.querySelector('main').innerHTML = '';
    const template =
    `
    <div id="ombd-signup">
      <input id="signup-nickname" type="text" placeholder="nickname" />
      <input id="signup-email" type="text" placeholder="correo electrónico" />
      <input id="signup-password" type="password" placeholder="contraseña" />
      <a href="#" id="signup-registro">regístrate</a>
    </div>
    `;

    document.querySelector('main').insertAdjacentHTML('afterbegin', template);
    document.querySelector('#signup-registro').addEventListener('click', signUpByEmail, false);
  }

  function loginByEmail() {
    toggleSpinner('show');
    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(data => {
        toggleSpinner('hide');
        isNotificationDiv();
        router.navigate(`/perfil/${data.user.uid}`);
      })
      .catch(error => {
        toggleSpinner('hide');
        isNotificationDiv(error);
      });
  }

  function signUpByEmail() {
    toggleSpinner('show');
    const nickname = document.querySelector('#signup-nickname').value;
    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(data => {
      toggleSpinner('hide');
      isNotificationDiv();
      users.child(data.user.uid).set({
        nickname: nickname,
        email: data.user.email,
        uid: data.user.uid
      });
      router.navigate(`/perfil/${data.user.uid}`);
    })
    .catch(error => {
      toggleSpinner('hide');
      isNotificationDiv(error);
    });
  }

  function logout () {
    toggleSpinner('show');
    firebase.auth().signOut().then(function() {
      toggleSpinner('hide');
      router.navigate('/');
    }).catch(error => {
      toggleSpinner('hide');
      errorHandler(error);
    });
  }

  function getUserName(uid) {
    const ombdUserName = document.querySelector('#ombd-user-name');
    const user = users.child(uid);
    user.once('value', data => {
      ombdUserName.innerHTML = data.val().nickname;
    });
  }

  function getDataFromDB(uid) {
    toggleSpinner('show');
    const user = users.child(uid);
    const movies = user.child('pelis');
    movies.on('value', idMovies => {
      toggleSpinner('hide');
      if (idMovies.hasChildren()) {
        const dataBase = idMovies.val();
        const ids = Object.keys(dataBase);

        for (let i = 0; i < ids.length; i++) {
          const id = ids[i];
          dataBase[id].id = id;
        }
        render(dataBase);
      }
    });
  }

  function render (movie) {
    const ul = document.querySelector('ul');
    ul.innerHTML = '';
    let template = '';

    for (const i in movie) {
      if (movie.hasOwnProperty(i)) {
        template += `
          <li>
            <div class="ombd-peli-poster">
              <img src="${movie[i].poster}">
            </div>
            <div class="ombd-peli-data">
              <div class="ombd-peli-detail">
                <p class="ombd-peli-detail-title">${movie[i].title}</p>
                <p class="small">${movie[i].release}</p>
                <p class="ombd-peli-detail-tags small">${movie[i].runtime} / ${movie[i].genre}</p>
                <p class="ombd-peli-detail-director">Director: ${movie[i].director}</p>
                <p>Rating: ${movie[i].imdbRating}</p>
              </div>
              <div class="ombd-peli-buttons">
                <button data-id="${movie[i].id}" class="ombd-peli-buttons-delete-movie">Eliminar</button>
              </div>
            </div>
          </li>`;
      }
    }

    ul.insertAdjacentHTML('beforeend', template);

    let array = Array.from(document.querySelectorAll('.ombd-peli-buttons-delete-movie'));
    array.forEach( item => {
      item.addEventListener('click', deleteMovie, false);
    });
  }

  function getValueInput() {
    if (searchInput.value !== undefined) {
      const search = searchInput.value.trim();
      const url = `http://www.omdbapi.com/?t=${search}&plot=full&type=movie&apikey=${key}`;
      api(url);
      searchInput.value = '';
    } else {
      isNotificationDiv(error);
    }
  }

  function deleteMovie(event) {
    const key = event.target.dataset.id;

    uid = firebase.auth().currentUser.uid;
    const user = users.child(uid);
    const movies = user.child('pelis');
    movies.child(key).remove();
  }

  async function api(url) {
    try {
      isNotificationDiv();
      const json = await fetch(url);
      const data = await json.json();

      uid = firebase.auth().currentUser.uid;
      const user = users.child(uid);
      const movies = user.child('pelis');
      const movie = movies.push();

      movie.update({
        title: data.Title,
        release: data.Released,
        runtime: data.Runtime,
        genre: data.Genre,
        director: data.Director,
        year: data.Year,
        imdbRating: data.imdbRating,
        poster: data.Poster
      });

    } catch (error) {
      isNotificationDiv(error);
    }
  }

  function isNotificationDiv(error) {
    if (document.querySelector('#error')) {
      document.querySelector('#error').remove();
      isError(error);
    } else {
      isError(error);
    }
  }

  function isError (error) {
    if (error) {
      const template =
      `
        <div id="error"></div>
      `;
      document.querySelector('body').insertAdjacentHTML('afterbegin', template);
      errorHandler(error);
    }
  }

  function errorHandler(err) {
    const errorCode = err.code;
    const errorMessage = err.message;
    const messageDiv = document.querySelector('#error');
    messageDiv.classList.add('alert-danger');
    messageDiv.innerHTML = `${errorCode}: ${errorMessage}`;
  }

  function toggleSpinner(state) {
    const spinner = document.querySelector('.spinner');
    let css = spinner.style;
    return (state === 'show') ? css.display = 'block' : css.display = 'none';
  }

  return {
    getValueInput: getValueInput
  };
})();