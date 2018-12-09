(function(){

  const urlBase = 'https://api.songkick.com/api/3.0/';

  /**
   * @description convierte un día a formato local, (wednesday -> miércoles)
   * @param {string} date - fecha formato (2018-12-07)
   * @return {Function} capitalizeFirstLetter
   */
  function convertDay(date) {
    let day = new Date(date).toLocaleDateString('es-ES', {weekday: 'long'});
    return capitalizeFirstLetter(day);
  }

  /**
   * @description capitaliza el día de la semana
   * @param {string} day, día de semana
   * @return {string} string
   */
  function capitalizeFirstLetter(day) {
    return day.charAt(0).toUpperCase() + day.slice(1);
  }

  /**
   * @description convierte la fecha del evento a formato local
   * @param {string} date - fecha formato (2018-12-07)
   * @param {string} type - (día, mes o año)
   * @returns {string | number} string en el caso de que el type sea mount y number si no
   */
  function splitDate(date, type) {
    const fullDate = new Date(date);
    if (type === 'year') {
      return fullDate.getFullYear();
    } else if (type === 'month') {
      return capitalizeFirstLetter(new Date(date).toLocaleDateString('es-ES', {month: 'long'}));
    } else if (type === 'day') {
      return fullDate.getDate();
    }
  }

  /**
   * @description quita los dos ceros finales a la hora del evento (19:30:00)
   * @param {string} time, hora del evento
   * @return {string} hora sin los dos ceros finales (19:30)
   * @see https://github.com/rwaldron/idiomatic.js/
   */
  function formatTime (time) {
    if (time == null) { // take advantage of == type coercion
      return 'Hora por confirmar';
    } else {
      const colon = time.lastIndexOf(':');
      return time.slice(0, colon);
    }
  }

  /**
   * @description cierra el modal (display: none)
   * @param {target: string} $event - elemento del DOM que será 'display: none'
   * @return void
   */
  function closeModal($event) {
    document.querySelector('.modal').remove();
  }

  /**
   * @description muestra u oculta el spinner con css dependiendo de si el state es show o no
   * @param {string} si es show, aplica 'block' a display, en otro caso, 'none'
   * @return void
   */
  function toggleSpinner(state) {
    const spinner = document.querySelector('.spinner');
    let css = spinner.style;
    if (state === 'show') {
      css.display = 'block';
    } else {
      css.display = 'none';
    }
  }
  /**
   * @description crea un nodeElement y le asigna una clase de CSS
   * @param {string} tagName - nombre de la etiqueta
   * @param {string} className - nombre de la clase de CSS
   * @return {HTMLElement}
   */
  function createTagAndSetStyle(tagName, className) {
    const tag = document.createElement(tagName);
    tag.classList.add(className);
    return tag;
  }

  /**
   * @description estructura los divs que tendrá el modal para el mapa y los datos del evento
   * @param {number} idEvent - id que servirá para obtener las coordenadas del evento
   * @return void
   */
  function loadModal(idEvent) {

    const eventDetails = document.querySelector('.event-details');

    const divModal = createTagAndSetStyle('DIV', 'modal');
    eventDetails.appendChild(divModal);

    const modal = document.querySelector('.modal');

    const divModalContent = createTagAndSetStyle('DIV', 'modal-content');
    modal.appendChild(divModalContent);

    const modalContent = document.querySelector('.modal-content');

    const span = createTagAndSetStyle('SPAN', 'close');
    span.addEventListener('click', closeModal, false);
    span.textContent = 'X';
    modalContent.appendChild(span);

    const h1 = document.createElement('H1');
    modalContent.appendChild(h1);

    const h3 = document.createElement('H3');
    modalContent.appendChild(h3);

    const p1 = document.createElement('P');
    const p2 = document.createElement('P');
    const p3 = document.createElement('P');
    modalContent.appendChild(p1);
    modalContent.appendChild(p2);
    modalContent.appendChild(p3);

    const divMap = createTagAndSetStyle('DIV', 'map');
    divMap.setAttribute('id', 'map');
    modalContent.appendChild(divMap);

    _searchLocation(idEvent, divModal, divMap);

  }

  /**
   * @description busca los detalles del evento (dirección, teléfono, website)
   * @param {number} idEvent - id del evento que servirá para hacer la llamada AJAX
   * @param {HTMLElement} divModal - contenedor de los detalles del evento
   * @param {HTMLElement} divMap - contenedor para el mapa de Google
   * @param {Object} data.results.venue - objeto con detalles del evento
   * @param {string} event.street - dirección
   * @param {string} event.zip - codigo postal
   * @param {string} event.website - website
   * @private
   */
  function _searchLocation(idEvent, divModal, divMap) {
    const path = 'venues/ ' + idEvent + '.json?apikey=' + config.API_SK;
    const url = urlBase + path;

    callApis(url, function (data) {

      const event = data.results.venue;

      if (event.lat !== null && event.lng !== null) {

        divModal.querySelector('h1').textContent = event.displayName;
        divModal.querySelector('h3').textContent = event.street + ' - ' + event.zip;
        let pes = divModal.querySelectorAll('p');
        for (let i = 0; i < pes.length; i++) {
          if (i === 0) {
            pes[i].textContent = event.phone;
          } else if (i === 1) {
            pes[i].textContent = event.website;
          } else if (i === 2) {
            pes[i].textContent = event.city.country.displayName;
          }
        }

        _googleMaps(event, divMap);

      } else {
        divModal.firstElementChild.children[1].textContent = 'No podemos mostrar la ubicación en el mapa';
      }
    });

    /**
     * @description pinta la ubicación y su marcador en el mapa de google
     * @param {Object} event - contiene detalles del evento
     * @param {HTMLElement} divMap - contenedor para los mapas
     * @param google.maps.Map - API google maps
     * @param google.maps.Marker - API google maps
     * @private
     */
    function _googleMaps(event, divMap) {
      const location = {lat: event.lat, lng: event.lng};
      const map = new google.maps.Map(divMap, {
        zoom: 12,
        center: location
      });
      const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: event.street
      });
    }
  }

  /**
   * @description crea una lista con todos los detalles de los eventos del artista
   * @param {number} id - id del artista para buscar todos sus eventos relacionados
   * @param data.totalEntries - numero total de resultados
   * @param tem.start.date - fecha. Parametro para la función splitDate
   * @return void
   */
  function artistDetails(id) {

    toggleSpinner('show');

    const path = 'artists/' + id + '/calendar.json?apikey=' + config.API_SK;
    const url = urlBase + path;

    callApis(url, function (data) {

      toggleSpinner('hide');

      const listOfEvents = data.results.event;

      const container = document.querySelector('.container');
      container.innerHTML = '';

      const eventDetails = createTagAndSetStyle('DIV', 'event-details');
      container.appendChild(eventDetails);

      const eventTotalSpan = createTagAndSetStyle('SPAN', 'event-total');
      eventTotalSpan.textContent = data.totalEntries + ' resultados encontrados';
      eventDetails.appendChild(eventTotalSpan);

      const ul = document.createElement('UL');
      ul.setAttribute('id', 'events');
      eventDetails.appendChild(ul);

      listOfEvents.forEach(function (item) {

        _createStructureEventDetail(item, ul);

      });

    });

    /**
     * @description crea la estructura con los detalles de cada evento divido por filas, (fecha, ciudad, y botón para buscarlo en el google maps)
     * @param {Object} item - contiene los detalles del evento seleccionado
     * @param {HTMLElement} ul - nodo contenedor
     * @return void
     * @private
     */
    function _createStructureEventDetail(item, ul) {
      const li = document.createElement('LI');

      const div1 = createTagAndSetStyle('DIV', 'event-date');
      const eventDateYear = createTagAndSetStyle('DIV', 'event-date-year');
      const eventDateMonth = createTagAndSetStyle('DIV', 'event-date-month');
      const eventDateDay = createTagAndSetStyle('DIV', 'event-date-day');

      const div2 = createTagAndSetStyle('DIV', 'event-date-details');
      const eventDetailsHour = createTagAndSetStyle('DIV', 'event-date-details-hour');
      const eventDetailsVenue = createTagAndSetStyle('DIV', 'event-date-details-venue');
      const eventCityCountry = createTagAndSetStyle('DIV', 'event-date-city-country');

      const div3 = createTagAndSetStyle('DIV', 'event-location');
      const button = document.createElement('BUTTON');
      button.appendChild(document.createTextNode('Buscar en el mapa'));

      div1.appendChild(eventDateDay);
      div1.appendChild(eventDateMonth);
      div1.appendChild(eventDateYear);

      div2.appendChild(eventDetailsHour);
      div2.appendChild(eventDetailsVenue);
      div2.appendChild(eventCityCountry);

      div3.appendChild(button);

      li.appendChild(div1);
      li.appendChild(div2);
      li.appendChild(div3);
      ul.appendChild(li);

      eventDateYear.textContent = splitDate(item.start.date, 'year');
      eventDateMonth.textContent = splitDate(item.start.date, 'month');
      eventDateDay.textContent = splitDate(item.start.date, 'day');

      eventDetailsHour.textContent = convertDay(item.start.date) + ' - ' + formatTime(item.start.time);
      eventDetailsVenue.textContent = item.venue.displayName;
      eventCityCountry.textContent = item.location.city;
      button.addEventListener('click', function () {
        loadModal(item.venue.id);
        // button.disabled = true;
      }, false);
    }
  }

  /**
   * @description crea la la lista de artistas (ul > li) que coincidan con la búsqueda
   * @param {Response} data - respuesta del servidor
   * @param data.results.artist - contiene el array con todos los artistas
   * @param data.totalEntries - numero total de artistas encontrados
   * @return void
   */
  function createListArtist(data) {

    toggleSpinner('show');
    const arrayResults = data.results.artist;
    const totalEntries = data.totalEntries;

    const container = document.querySelector('.container');

    const events = createTagAndSetStyle('DIV', 'events');
    container.appendChild(events);

    const listArtist = createTagAndSetStyle('DIV', 'list-artist');
    events.appendChild(listArtist);

    const listArtistNoEvents = createTagAndSetStyle('DIV', 'list-artist-noEvents');
    events.appendChild(listArtistNoEvents);

    const ul = document.createElement('UL');
    const ulNoEvents = document.createElement('UL');

    const spanTotalEntries = createTagAndSetStyle('SPAN', 'total-entries');
    let spanText = document.createTextNode(totalEntries + ' resultados coinciden con tu búsqueda');
    spanTotalEntries.appendChild(spanText);
    listArtist.appendChild(spanTotalEntries);

    if (arrayResults && arrayResults.length > 0) {

      listArtist.appendChild(ul);
      listArtistNoEvents.appendChild(ulNoEvents);

      arrayResults.forEach(function (artist) {

        _orderListArtistByEvents(artist);

      });
    } else {
      toggleSpinner('hide');
    }

    /**
     * @description coloca más arriba los artistas cuyo número total de eventos sea diferente a 0
     * @param {Object} artist - contiene el nombre y el id del artista
     * @return void
     * @private
     */
    function _orderListArtistByEvents (artist) {
      const path = 'artists/' + artist.id + '/calendar.json?apikey=' + config.API_SK;
      const url = urlBase + path;

      callApis(url, function (event) {

        toggleSpinner('hide');

        if (event.totalEntries > 0) {

          const li = createTagAndSetStyle('LI', 'list-artist-link');
          const text = document.createTextNode(artist.displayName);
          li.appendChild(text);
          ul.insertBefore(li, ul.firstChild);

          const small = document.createElement('SMALL');
          const totalEvents = document.createTextNode(event.totalEntries + ' eventos encontrados');
          small.appendChild(totalEvents);
          li.appendChild(small);

          document.querySelector('.list-artist-link').addEventListener('click', function () {
            artistDetails(artist.id);
          }, false);

        } else {
          const li = document.createElement('LI');
          const text = document.createTextNode(artist.displayName);
          li.appendChild(text);
          ulNoEvents.appendChild(li);

          const small = document.createElement('SMALL');
          const totalEvents = document.createTextNode(event.totalEntries + ' eventos encontrados');
          small.appendChild(totalEvents);
          li.appendChild(small);
        }
      });
    }

  }

  /**
   * @description coge el texto del input y le pasa ese valor a callApis para hacer una llamada AJAX
   * @param {Element} input - input tipo tagName
   * @param {Function} callback nque se ejecutará cuando el servidor responda con un 200
   * @param {number} delay - delay para el disparador de la función
   * @return void
   */
  function searchEvents(input, callback, delay) {
    const path = 'search/artists.json?apikey=' + config.API_SK + '&query=';
    const url = urlBase + path;

    const container = document.querySelector('.container');
    container.innerHTML = '';
    container.classList.remove('warning');

    let timer = null;
    input.onkeyup = function ($event) {
      let string = '';
      //numeros, letras, backspace, enter
      const condition = $event.which >= 48 && $event.which <= 90 || $event.which === 8 || $event.which === 13;
      if (condition) {
        if ($event.target.value.length > 3) {
          string = $event.target.value.trim();
          if (timer) {
            window.clearTimeout(timer);
          }
          timer = window.setTimeout(function () {
            timer = null;
            callback(url + string, function (data) {

              container.innerHTML = '';
              container.classList.remove('warning');
              createListArtist(data);

            });
          }, delay);
        } else if ($event.target.value === '') {
          container.innerHTML = '';
        } else {
          container.innerHTML = 'Escribe al menos 3 caracteres';
          container.classList.add('warning');
        }

      }

    };
    input = null;
  }

  /**
   * @description interfaz standard de XMLHttpRequest, podría no funcionar en navegadores antiguos
   * @param {string} url - dirección de la API
   * @param {Function} callback - función que se ejecutará después de recibir una respuesta satisfactoria del servidor
   * @param xhr.resultsPage - contiene una key expecífica de la respuesta del servidor para pintar resultados
   */
  function callApis(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {

        if (xhr.status >= 200 && xhr.status <= 300 ) {
          xhr = JSON.parse(xhr.responseText);
          let data = xhr.resultsPage;
          callback(data);
        } else {
          const container = document.querySelector('.container');
          container.innerHTML = `Error: ${xhr.status}`;
        }
      }
    };
    xhr.send();
  }

  /**
   * @description Selecciono el elemento HTML (input) que me servirá para inicializar la aplicación de búsqueda de eventos
   */
  let inputText = document.querySelector('.inputSearch');
  searchEvents(inputText, callApis, 400);
})();