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
  let indexToChange = null;

  function onShowDeleteAllButton(show = false) {
    if (show) {
      buttonDeleteAll.style.display = 'block';
    } else {
      buttonDeleteAll.style.display = 'none';
    }
  }

  function onShowDeleteButton(show = false) {
    if (show) {
      buttonDelete.style.display = 'block';
    } else {
      buttonDelete.style.display = 'none';
    }
  }

  function init() {
    onShowDeleteButton();
    let data = localStorage.getItem('contacts');
    if (!!data) {
      data = JSON.parse(data);
      contactsToStorage = data;
      if (contactsToStorage && contactsToStorage.length) {
        onShowDeleteAllButton(true);
      }
      _getDataLocalStorage(data);
    } else {
      onShowDeleteAllButton();
    }
  }

  function _getDataLocalStorage (data) {
    data.forEach(item => appendTemplate(item));
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

  function saveContact() {
    const values = _getValuesForm();
    const isFormOk = _isFormOK(values);
    if (isFormOk) {
      Array.from(inputs).map(item => item.value = '');
      const contactValues = _createContact(values);
      appendTemplate(contactValues);
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
    if (document.querySelector('#nobody')) {
      document.querySelector('#nobody').remove();
    }

    const [name, phone, email] = values;
    const contactData = {
      name,
      phone,
      email
    };

    if (indexToChange === null) {
      contactData.id = generateId();
      contactsToStorage.push(contactData);
    } else {
      containerList.innerHTML = '';
      contactsToStorage.splice(indexToChange, 1, contactData);
    }

    _setLocalStorage(contactsToStorage);
    onShowDeleteAllButton(true);
    return contactData;
  }

  function generateId() {
    return Math.floor(Date.now() / 1000);
  }

  function recoverContact() {
    const searched = document.querySelector('#search').value;
    containerList.innerHTML = '';

    let i;

    for (i = 0; i < contactsToStorage.length; i++) {
      if (contactsToStorage[i].name === searched) {
        indexToChange = contactsFiltered = i;
        onShowDeleteButton(true);
        appendTemplate(contactsToStorage[i]);
        _getContactToEdit(contactsToStorage[i]);
        break;
      }
    }

    if (indexToChange === null) {
      containerList.innerHTML = `<p id="nobody">No tienes ningún contacto con el nombre: ${searched}</p>`;
    }
  }

  function _getContactToEdit(contact) {
    const {name, phone, email} = contact;
    document.querySelector('#name').value = name;
    document.querySelector('#mobile').value = phone;
    document.querySelector('#email').value = email;
  }

  function deleteContact () {
    name = inputs[0].value;

    let contactIndex;
    contactsToStorage.forEach( (item, index) => {
      if (item.name === name) {
        contactIndex = index;
        Array.from(inputs).map(item => item.value = '');
        return contactIndex;
      }
    });

    if (contactIndex !== undefined) {
      contactsToStorage.splice(contactIndex, 1);
      containerList.innerHTML = '';
      contactsToStorage.forEach(item => appendTemplate(item));
      _updateLocalStorage(contactsToStorage);
      onShowDeleteButton();
    } else {
      containerList.innerHTML = `No tienes ningún contacto con el nombre de: ${name}`;
    }
  }

  function deleteAllContact() {
    _deleteLocaleStorage();
    onShowDeleteAllButton();
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