#### 1 - Ayudemos a la NASA!

En Marte tenemos un rover llamado curiosity... Nuestro objetivo es usar la API de la NASA para complementar este ejercicio.

```javascript

function NasaRequest(current, request, frecuency) {
  const token = '';
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${current}&api_key=${token}`;
  return new Promise(((resolve, reject) => {
    fetch(url)
      .then(json => {
        console.log(`request started for: ${json.url}`);
        console.log(`Delay for next request ${frecuency}ms`);
        return json.json()
      })
      .then(res => {
        if (res.photos.length !== 0) {

          resolve(res);

        } else {
          setTimeout(() => {
            current = current - 1;
            NasaRequest(current, request, frecuency)
          }, frecuency)
        }
      })
      .catch(error => console.log(`ERROR: ${error.message}`))
  }))
};

async function init() {
  try {
    const currentValue = await NasaRequest(2266, false, 1000);
    console.log("currentValue:", currentValue);
  } catch (error) {
    console.log(error);
  }
}

init();

```