const https = require('https');

const [,,grade, frecuency] = process.argv;

const url = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${grade}_${frecuency}.geojson`;

https.get(url, res => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    const parsed = JSON.parse(data);
    console.log('*****************************');
    console.log(parsed.metadata.title);
    console.log('   ---------------------     ');
    console.log('total:', parsed.metadata.count);
    console.log('status:', parsed.metadata.status);
    console.log('   ---------------------     ');
    console.log(new Date(parsed.metadata.generated).toLocaleString('es-ES'));
    console.log('==============================');
    parsed.features.forEach(feature => {
      console.log(feature.properties.title);
      console.log(new Date(feature.properties.time).toLocaleString('es-ES'));
      console.log('Magnitud:', feature.properties.mag);
      console.log('Estatus:', feature.properties.status);
      console.log('Tipo:', feature.properties.type);
      console.log('Lugar:', feature.properties.place);
      const [lon, lat] = feature.geometry.coordinates;
      console.log('Coordenadas:', `${lon}, ${lat}`);
      console.log('Info:', feature.properties.url);
      console.log('Detalles:', feature.properties.detail);
      console.log('==============================');
    });
  });

}).on('error', (err) => {
  console.log(`Got error: ${err.message}`);
});