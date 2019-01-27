### Ejercicios

![img](../../assets/clase28/2fbe4515-8a48-4374-8b0c-bd5d2dc0e888.png)

#### 1 - Ayudemos a la NASA!

En Marte tenemos un rover llamado [curiosity](https://es.wikipedia.org/wiki/Curiosity)... Nuestro objetivo es usar la [API de la NASA](https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos) para complementar este ejercicio.

**Problema:**
- La medida del tiempo para esta API son los SOLES, no todos los SOLES tenemos datos, por eso la api retorna un array vacío en algunso soles.
```JSON
{
  "photos": [
    
  ]
}
```

**Recursos**
- [Sacar un token para usar la API de la NASA](https://api.nasa.gov/index.html#apply-for-an-api-key)

**Solución:**
- Nuestro objetivo es hacer una llamada recursiva a la API de tal forma que si un SOL no tiene información útil pasamos al SOL anterior.
- Para evitar baneos necesitamos determinar la frecuencia de las llamadas recursivas en ms
- Así como podemos establecer un límite de llamadas por si salimos mucho de rango.

**Mensajes esperados por consola:**

```
request started for: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2080&api_key=XXX
Delay for next request 1000ms
request started for: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2079&api_key=XXX
Delay for next request 1000ms
request started for: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2078&api_key=XXX
Delay for next request 1000ms
request started for: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2078&api_key=XXX
Delay for next request 1000ms
request started for: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2077&api_key=XXX
Delay for next request 1000ms
request started for: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2076&api_key=XXX
Delay for next request 1000ms
request started for: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2075&api_key=XXX
Delay for next request 1000ms
request started for: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2074&api_key=XXX
Delay for next request 1000ms
request started for: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2073&api_key=XXX
Delay for next request 1000ms
request started for: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2072&api_key=XXX
Delay for next request 1000ms
request started for: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2071&api_key=XXX
Delay for next request 1000ms
request started for: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2070&api_key=XXX
currentValue: [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
```

Mientras hacía el ejercicio, tuve algunos problemas intentando usar async/await recursivamente. Más info en [esta pregunta](https://stackoverflow.com/questions/54370252/recursive-async-await-request-doesnt-return-to-calling-function) de SO.
```javascript
const apiKey = "yourApiKey";
const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=";

async function requestData(url) {
    let response = await fetch(url);
    if(response.ok) {
        return response.json();
    } else {
        throw new Error(response.status);
    }
}

function sleep(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function nasaRequest(sun, limit, frecuency) {
    let data = await requestData(url + sun + "&api_key=" + apiKey);
    if(data.photos.length === 0 && !limit) {
        await sleep(frecuency);
        return await nasaRequest(sun - 1, limit, frecuency);
    } else {
        return data;
    }
};

async function init() {
    try {
        const currentValue = await nasaRequest(2175, false, 2000);
        console.log("Photos founded:", currentValue);
    }catch(err){
        console.error(err);
    }
}

init();

```
