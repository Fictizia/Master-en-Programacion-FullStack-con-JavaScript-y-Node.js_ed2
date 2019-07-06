(function () {

  const URL =`http://api.metro.net/agencies/lametro/routes/`;
  const URL_ROUTE =  `http://api.metro.net/agencies/lametro/routes/number/vehicles/`;

  async function init(url) {
    try {
      const json = await fetch(url);
      if (json.status !== 200) {
        throw new Error('Error');
      }
      const resRoutes = await json.json();
      if (resRoutes && resRoutes.items.length) {
        const arrayIds = getIds(resRoutes);
        const arrayUrls = searchAndReplaceNumberVehicle(arrayIds, URL_ROUTE);
        const vehicles = await getAllVehicles(arrayUrls);
        getAllRoutes(vehicles);
        document.querySelector('#spinner').style.display = 'none';
      } else {
        document.querySelector('#spinner').style.display = 'none';
        document.querySelector('#map').innerHTML = '<p style="position: absolute; transform: translate(-50%, -50%); top: 50%; left: 50%;">Algo ha ido mal, vuelve a intentarlo mas tarde</p>';
      }
    } catch (error) {
      console.log(error);
    }
  }

  function getIds(resRoutes) {
    const array = resRoutes.items;
    return array.map(item => item.id);
  }

  function searchAndReplaceNumberVehicle(arrayIds, URL_ROUTE) {
    let replaced = [];
    arrayIds.forEach(item => {
      replaced.push(URL_ROUTE.replace(/number/, item));
    });
    return replaced;
  }

  async function getAllVehicles(arrayUrlsParsed) {
    let promises = arrayUrlsParsed.map(async item => {
      try{
        const json = await fetch(item);
        if (json.status !== 200) {
          throw new Error("Error");
        }
        const data = await json.json();
        return data.items
      } catch(error) {
        console.log(error);
      }
    });
    return await Promise.all(promises);
  };

  function getAllRoutes(vehicles) {
    let vehiclesConcat = [];
    vehiclesConcat = Array.prototype.concat.apply([], vehicles);

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