var xmlHttp = new XMLHttpRequest();
var baseUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients";
var apiKey = "yourAPIKey";
var inputIngredients = [];

document.getElementById("add-ingredient-input").addEventListener("keyup", function(ev) {
    if(ev.key !== "Enter") {
        return;
    }
    else {
        addIngredientToList();
        ev.preventDefault();
    }
});

document.getElementById("search-recipes-btn").addEventListener("click", searchRecipesByIngredients);

function requestData(url, cb) {
    xmlHttp.onreadystatechange = function()
    {
        if(xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            var data = JSON.parse(xmlHttp.responseText);
            cb(data);
        }
        else if(xmlHttp.readyState === 4){
            console.log("Error getting data. Status code: " + xmlHttp.status);
        }
    }

    xmlHttp.open("GET", url, true);
    xmlHttp.setRequestHeader("X-Mashape-Key", apiKey);
    xmlHttp.setRequestHeader("Accept", "application/json");
    xmlHttp.send();
}

function searchRecipesByIngredients() {
    if (inputIngredients.length > 0) {
        var ingredients = inputIngredients.join("%2C");
        var fillIngredients = true;
        var limitLicense = false;
        var number = 5;
        var ranking = 2;

        var parameters = "?ingredients=" + ingredients + "&fillIngredients=" + fillIngredients + "&limitLicense=" + limitLicense + "&number=" + number + "&ranking=" + ranking;
        var completeUrl = baseUrl.concat(parameters);

        requestData(completeUrl, displayRecipesInView);
    }
    else {
        console.log("Error searching for recipes. There are no ingredients to use.");
    }
}

function displayRecipesInView(data){
    var numberOfCols = 3;

    var containerFluid = document.getElementsByClassName("container-fluid")[0];

    chunkedData = chunkArray(data, numberOfCols);

    var rowElement = createRow();
    for(var colIndex = 0; colIndex < numberOfCols; colIndex++) {
        var colElement = createColumn();
        fillColumnWithRecipes(colIndex, colElement, numberOfCols, chunkedData[colIndex]);
        rowElement.appendChild(colElement);
    }

    containerFluid.appendChild(rowElement);
}

function createOverlay(){
    var overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");
    return overlayElement;
}

function fillColumnWithRecipes(colIndex, colElement, numberOfCols, data) {
    var numberOfRecipesInCol = data.length;
    for(var i = 0; i < numberOfRecipesInCol; i++) {
        var overlayElement = createOverlay();
        var imgElement = createImage(data[i].image);
        overlayElement.appendChild(imgElement);
        var nameElement = createName(data[i].title);
        overlayElement.appendChild(nameElement);
        colElement.appendChild(overlayElement);
    }
}

function chunkArray(array, numberOfChunks) {
    var result = [];

    if (numberOfChunks < 2){
        result = [array];
    }
    else {
        var i = 0;
        var len = array.length;
        var size;
        while (i < len) {
            size = Math.ceil((len - i) / numberOfChunks--);
            result.push(array.slice(i, i += size));
        }
    }

    return result;
}

function createRow() {
    var rowElement = document.createElement("div");
    rowElement.classList.add("row");
    return rowElement;
}

function createColumn() {
    var colElement = document.createElement("div");
    colElement.classList.add("col-lg-4");
    return colElement;
}

function createImage(imageUrl) {
    var imgElement = document.createElement("img");
    imgElement.classList.add("recipe-image");
    imgElement.src = imageUrl;
    return imgElement;
}

function createName(name){
    var nameElement = document.createElement("p");
    nameElement.classList.add("recipe-name");
    var nameText = document.createTextNode(name);
    nameElement.appendChild(nameText);
    return nameElement;
}

function addIngredientToList(){
    var newIngredient = document.getElementsByName("ingredientInput")[0].value;
    if (!ingredientExists(newIngredient)){
        inputIngredients.push(newIngredient);

        var node = document.createElement("li");
        var textNode = document.createTextNode(newIngredient);
        node.appendChild(textNode);
        document.getElementById("ingredients-list").appendChild(node);
    }
    else {
        console.log("The entered ingredient already exists in the list");
    }
}

function ingredientExists(ingredient) {
    var exists = inputIngredients.indexOf(ingredient);
    return (exists !== -1) ? true : false;
}
