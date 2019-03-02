#### 1 - Crear una libreta de contactos para guardar nombre y numero de telefono usando LocalStorage

#### 2 - Crea una libreta de contactos para guardar multiples datos.

`index.html`
```html
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Contacts</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" type="text/css" media="screen" href="css/style.css"/>
  </head>

  <body>
    <h1>Contacts</h1>
    Nombre: <input type="text" /><br />
    Móvil: <input type="text" /><br />
    Email: <input type="text" /><br />

    <p class="alert">campo no válido</p>

    <button id="save">Guardar</button> <button id="recover">Recuperar</button>
    <button id="delete">Eliminar</button>
    <button id="deleteAll">Eliminar todos</button>

    <hr />

    <ul id="containerList"></ul>

    <script src="js/main.js"></script>
  </body>
</html>

```

`js/main.js`
```javascript
(function() {
  const inputs = document.querySelectorAll('input[type=text]');
  const containerList = document.querySelector('#containerList');

  const buttonSave = document.querySelector('#save');
  const buttonRecover = document.querySelector('#recover');
  const buttonDelete = document.querySelector('#delete');
  const buttonDeleteAll = document.querySelector('#deleteAll');

  buttonSave.addEventListener('click', saveContact, false);
  buttonRecover.addEventListener('click', recoverContact, false);
  buttonDelete.addEventListener('click', deleteContact, false);
  buttonDeleteAll.addEventListener('click', deleteAllContact, false);

  let contactsToStorage = [];

  function init() {
    let data = localStorage.getItem('contacts');
    if (!!data) {
      data = JSON.parse(data);
      contactsToStorage = data;
      _getDataLocalStorage(data);
    }
  }

  function _getDataLocalStorage (data) {
    data.forEach(item => appendTemplate(item));
  }

  function saveContact() {
    const values = _getValuesForm();
    const isFormOk = _isFormOK(values);
    if (isFormOk) {
      Array.from(inputs).map(item => item.value = '');
      const contactValues = _createContact(values);
      appendTemplate(contactValues);
    } else {
      console.log(`algo ha ido mal`);
    }
  }

  function _getValuesForm() {
    return Array.from(inputs).map(item => item.value);
  }

  function _isFormOK(values) {
    const NAME_REGEX = /\w+/g;
    const PHONE_REGEX = /[0-9]+/g;
    const EMAIL_REGEX = /([\w]+[\-]*[0-9]*)+@(([\w]{3,})+[\.])+([a-z]{2,3})/g;

    if (values[0].match(NAME_REGEX) === null || values[1].match(PHONE_REGEX) === null || values[2].match(EMAIL_REGEX) === null) {
      document.querySelector('.alert').style.display = 'block';
      return false;
    } else {
      document.querySelector('.alert').style.display = 'none';
      return true;
    }
  }

  function _createContact(values) {
    const [name, phone, email] = values;
    const contactData = {
      name,
      phone,
      email
    };
    contactsToStorage.push(contactData);
    _setLocalStorage(contactsToStorage);
    return contactData;
  }

  function appendTemplate(contactValues) {
    const template =
    `
      <li>
        <div class="avatar"><img src="https://api.adorable.io/avatars/40/${contactValues.email}.png" alt="img"></div>
        <div class="details">
          <div class="title">${contactValues.name}</div>
          <div class="phone">${contactValues.phone}</div>
          <div class="email">${contactValues.email}</div>
        </div>
      </li>
    `;

    containerList.insertAdjacentHTML('afterbegin', template);
  }

  function recoverContact() {
    name = inputs[0].value;
    containerList.innerHTML = '';
    contactsFiltered = contactsToStorage.filter(item => item.name === name);
    if (contactsFiltered && contactsFiltered.length) {
      contactsFiltered.forEach(item => appendTemplate(item));
    } else {
      containerList.innerHTML = `No tienes ningún contacto con el nombre de: ${name}`;
    }
  }

  function deleteContact () {
    name = inputs[0].value;

    let contactIndex;
    contactsToStorage.forEach( (item, index) => {
      if (item.name === name) {
        contactIndex = index;
        return contactIndex;
      }
    });

    if (contactIndex !== undefined) {
      contactsToStorage.splice(contactIndex, 1);
      containerList.innerHTML = '';
      contactsToStorage.forEach(item => appendTemplate(item));
      _updateLocalStorage(contactsToStorage);
    } else {
      containerList.innerHTML = `No tienes ningún contacto con el nombre de: ${name}`;
    }
  }

  function deleteAllContact() {
    _deleteLocaleStorage();
  }

  function _setLocalStorage (contactsToStorage) {
    localStorage.setItem('contacts', JSON.stringify(contactsToStorage));
  }

  function _updateLocalStorage () {
    localStorage.removeItem('contacts');
    localStorage.setItem('contacts', JSON.stringify(contactsToStorage));
  }

  function _deleteLocaleStorage() {
    containerList.innerHTML = '';
    localStorage.removeItem('contacts');
  }

  init();

})();
```

`css/style.css`
```
.alert {
  display: none;
}
```