//Ejercicio 1
var planes = document.querySelectorAll('.plansWrapper .plan');
for (let i = 0; i < planes.length; i++) {
  const plan = planes[i];
  var title = plan.querySelector('header h1 a').textContent;
  var link = plan.querySelector('header h1 a').href;
  console.log('-['+title+']('+link+')');
}

//Ejercicio 2
var lineas = document.querySelectorAll('.tiempo_r .bloquet a[title="Estado de la línea"]');
for (let index = 0; index < lineas.length; index++) {
  const linea = lineas[index];
  console.log(linea.text);
}

//Ejercicio 3
var images = document.querySelectorAll('.entry-thumb');
for (let index = 0; index < images.length; index++) {
  const image = images[index];
  var _width = image.width;
  var _height = image.height;
  image.setAttribute('src','https://placekitten.com/'+_width+'/'+_height)
}

//Ejercicio 4
var profes = document.querySelectorAll('.profesores .microCard');
var profesInfo = [];
for (let index = 0; index < profes.length; index++) {
  const profeNode = profes[index];
  var profe = {}
  profe.name = profeNode.querySelector('h3').textContent;
  profe.picture = profeNode.querySelector('.withMedia img').src;
  profe.description = profeNode.querySelector('p').src;

  var socialsNodes = profeNode.querySelectorAll('.microBtns li a');
  var socials = [];
  for (let s = 0; s < socialsNodes.length; s++) {
    const social = socialsNodes[s];
    var red = social.text.toLowerCase();
    socials[red] = social.href;
  }
  profe.socials = socials;
  profesInfo.push(profe);
}
console.log(profesInfo);