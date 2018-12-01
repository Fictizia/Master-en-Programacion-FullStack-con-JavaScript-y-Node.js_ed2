function renderEspacio(element){
    element.appendChild(document.createElement("br")); 
}

function renderTextNode (text, element) {
    let node = document.createTextNode(text);
    return element.appendChild(node);
}

function render(polens){
    for (var polen of polens) {
        renderPolenItem(polen)
    }
}

function renderMediciones(obj, doc) {
    for (var [key, value] of Object.entries(obj)) {
        renderTextNode(key + ': ' +  obj[key].fecha + ' ' + obj[key].resumen + ' ' + obj[key].valor, doc)
    }
}

function renderParametros(obj, doc) {
    for (var [key, value] of Object.entries(obj)) {
        renderTextNode(key + ': ' +  obj[key].alto + ' ' + obj[key].medio + ' ' + obj[key].muy_alto, doc)
    }
}

function renderPolenItem (polenItem) {
    var doc = document.body;

    renderTextNode("Nombre: " + polenItem.name, doc);
    renderEspacio(doc);
    renderTextNode("Identificador: " + polenItem.id, doc);
    renderEspacio(doc);
    renderMediciones(polenItem.mediciones, doc)
    renderEspacio(doc);
    renderParametros(polenItem.parametros, doc)
    renderEspacio(doc);
    renderTextNode("UTM longitud: " + polenItem.UTM_longitud, doc);
}

let req = fetch("http://airemad.com/api/v1/pollen");

req
.then(function(response) {
    return response.json()
})
.then((data) => {
    render(data)
})
.catch((error) => {
 console.log("Hubo un error, no se sabe cual.....")
 console.log(error)
})



