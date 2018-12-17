var imagenes = Array.prototype.slice.call(document.querySelectorAll('img'));

for (i = 0 ; i < imagenes.length; i++){

    
    var wid = imagenes[i].width;
    var hei = imagenes[i].height;
    imagenes[i].src = "https://placekitten.com/" + wid + "/" + hei;
   
   
}
