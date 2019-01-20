### 1 - Utiliza Google Maps para posicionar al usuario.

```javascript
function stateOk (position) {
  console.log(position.coor);

}

function errorHandle(error) {
  console.log(error);
}

navigator.geolocation.getCurrentPosition(stateOk, errorHandle)
```

### 2 - Utiliza Leaflet para posicionar al usuario.

### 3 - Posiciona todos los vehículos de transporte (trenes y autobuses) de Los Angeles en el mapa.

`index.html`
```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Metro LA - USA</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    #map {
      height: 100%;
    }

    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
   </style>
</head>

<body>

  <div id="map"></div>

  <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"></script>
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA8CXiCeg6Dvg0d9zDFUAFSPE0WsMsyQPc" type="text/javascript"></script>
  <script src="./js/api.js"></script>
  <script src="./js/main.js"></script>
</body>

</html>
```

`main.js`
```javascript
(function () {

  const URL = config.API;
  const URL_ROUTE = config.API_ROUTES;

  async function init(url) {
    try {
      const json = await fetch(url);
      const resRoutes = await json.json();
      const arrayIds = getIds(resRoutes);
      const arrayUrls = searchAndReplaceNumberVehicle(arrayIds, URL_ROUTE);
      const vehicles = await getAllVehicles(arrayUrls);
      getAllRoutes(vehicles);
    } catch (error) {
      console.log(error);
    }
  }

  function getIds(objRes) {
    const array = objRes.items;
    return array.map(item => item.id);
  }

  function searchAndReplaceNumberVehicle(arrayIds, URL_ROUTE) {
    let replaced = [];
    for (let i = 0; i < arrayIds.length; i++) {
      replaced.push(URL_ROUTE.replace(/number/, arrayIds[i]));
    }
    return replaced;
  }

  async function getAllVehicles(arrayUrlsParsed) {

    let promises = arrayUrlsParsed.map(async item => {
      const json = await fetch(item);
      const data = await json.json();
      return data.items
    });

    return await Promise.all(promises);

  };

  function getAllRoutes(vehicles) {
    let vehiclesConcat = [].concat.apply([], vehicles);

    const coordinates = vehiclesConcat.map(item => {
      return {
        lat: item.latitude,
        lng: item.longitude
      };
    });

    initMap(coordinates);
  }

  function initMap(coordinates) {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: {
        lat: 34.052235,
        lng: -118.243683
      }
    });

    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const markers = coordinates.map(function (location, i) {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
      });
    });

    const markerCluster = new MarkerClusterer(map, markers, {
      imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
    });
  }

  init(URL);
})();
```

`api.js`
```javascript
const config = {
  API: `http://api.metro.net/agencies/lametro/routes/`,
  API_ROUTES: `http://api.metro.net/agencies/lametro/routes/number/vehicles/`
};
```