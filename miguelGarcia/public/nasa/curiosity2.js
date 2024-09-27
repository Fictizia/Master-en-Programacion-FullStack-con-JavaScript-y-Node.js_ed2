
function NasaRequest(url,sun,limit,frecuency) {
    
    return new Promise(function(resolve,reject){
            
            let xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", url, true);
            xmlHttp.send();
            xmlHttp.onreadystatechange = function() {
    
                if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                    console.log("respuesta");
                    resolve (JSON.parse(xmlHttp.responseText));
                } 
                else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
                    console.error("ERROR! 404");
                    reject (JSON.parse(xmlHttp.responseText));
                }
            };
       
        
    });
}   


let sun = 2047;
let frecuency = 1000;
async function init() {

    const token = "UtXjt0H5jUOdg7OzsNhKrqYgGLUwRu3yC688M13w";    
    let limit = false;
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sun}&api_key=${token}`

  const currentValue = await NasaRequest(url,frecuency);
  if (currentValue.length === 0){
     console.log("currentValue:", currentValue.photos);
     sun -=1;
     init()
     
  }
  else {
    console.log("currentValue:", currentValue.photos);
    pintarfotos(currentValue);
  }
}

init();



 divRow = document.querySelector('#cartas');
 function pintarfotos(currentValue){

     for (i = 0 ; i < currentValue.photos.length ; i++){
       // crear tarjeta
             card = document.createElement('div');
             card.setAttribute('class','card text-center p-1 bg-warning m-3 border-warning');
             cardTitle = document.createTextNode('Sol: ' + currentValue.photos[i].sol);
             cameraName = document.createTextNode(currentValue.photos[i].camera.full_name);
             id = document.createTextNode('Id: ' + currentValue.photos[i].id);
             h6 = document.createElement('h6');
             h6.appendChild(cameraName);
             h5 = document.createElement('h5');
             h5.appendChild(cardTitle);
             h6i = document.createElement('h6');
             h6i.appendChild(id);
            
             cardImg = document.createElement('img');
             cardImg.setAttribute('class','card-img-top');
             cardImg.setAttribute('src',currentValue.photos[i].img_src);
             card.appendChild(cardImg);
             card.appendChild(h5);
             card.appendChild(h6);
             card.appendChild(h6i);
             divCol = document.createElement('div');
             divCol.setAttribute('class','col-4');
             divCol.appendChild(card);
             divRow.appendChild(divCol);


       
        


     }
 }
