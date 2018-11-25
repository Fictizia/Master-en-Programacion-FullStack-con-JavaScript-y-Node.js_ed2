var xmlHttp = new XMLHttpRequest();
var baseUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients";
var apiKey = "yourApiKey";
var inputIngredients = [];
var recipes;

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

document.getElementsByClassName("recipes")[0].addEventListener("click", showRecipeDetails);

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

function findRecipeByImageUrl(ev){
    var recipeId = ev.target.dataset.id;
    return recipes.find(recipe => {
        return recipe.id == recipeId;
    });
}

function showRecipeDetails(ev){
    if (isTargetValid(ev)) {
        var recipe = findRecipeByImageUrl(ev);
        if(recipe){
            showModal(recipe);
        }
    }
}

function isTargetValid(ev) {
    return ev.target.className === "recipe-image" || ev.target.className === "recipe-name";
}

function showModal(recipe) {
    console.log(recipe);
    fillModal(recipe);
    $("#exampleModal").modal("toggle");
}

function fillModal(recipe) {
    fillRecipeImage(recipe.id);
    fillRecipeDetails(recipe);
}

function fillRecipeImage(recipeId){
    var recipeImage = document.querySelector(".modal-body .recipe-image");
    recipeImage.src = "https://spoonacular.com/recipeImages/" + recipeId + "-636x393.jpg";
}

function fillRecipeDetails(recipe) {
    fillRecipeName(recipe);
    fillUnusedIngredients(recipe);
    fillMissingIngredients(recipe);
    var url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/" + recipe.id + "/information";
    requestData(url, fillRecipeInstructions);
}

function fillRecipeName(recipe) {
    var name = document.querySelector(".recipe-details");
    removeChildrenFromNode(name);
    var title = document.createElement("h1");
    var textNode = document.createTextNode(recipe.title);
    title.appendChild(textNode);
    name.appendChild(title);
}

function fillUnusedIngredients(recipe){
    var unusedIngredientsElement = document.getElementsByClassName("unused-ingredients")[0];
    removeChildrenFromNode(unusedIngredientsElement);
    for(var ingredient of recipe.unusedIngredients) {
        var p = document.createElement("p");
        var textNode = document.createTextNode(ingredient.name);
        p.appendChild(textNode);
        unusedIngredientsElement.appendChild(p);
    }
}

function fillMissingIngredients(recipe){
    var missedIngredientsElement = document.getElementsByClassName("missed-ingredients")[0];
    removeChildrenFromNode(missedIngredientsElement);
    for(var ingredient of recipe.missedIngredients) {
        var p = document.createElement("p");
        var textNode = document.createTextNode(ingredient.originalString);
        p.appendChild(textNode);
        missedIngredientsElement.appendChild(p);
    }
}

function fillRecipeInstructions(recipe){
    if (recipe.instructions) {
        var recipeSteps = document.getElementsByClassName("recipe-steps")[0];
        removeChildrenFromNode(recipeSteps);
        var instructions = document.createTextNode(recipe.instructions);
        recipeSteps.appendChild(instructions);
    }
}

function removeChildrenFromNode(node){
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

function displayRecipesInView(data){
    recipes = data;
    var numberOfCols = 3;

    var containerFluid = document.getElementsByClassName("container-fluid")[0];
    removeChildrenFromNode(containerFluid);

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
        imgElement.dataset.id = data[i].id;
        overlayElement.appendChild(imgElement);
        var nameElement = createName(data[i].title);
        nameElement.dataset.id = data[i].id;
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

        var div = document.createElement("div");
        var img = document.createElement("img");
        img.src = "https://spoonacular.com/cdn/ingredients_100x100/" + newIngredient + ".jpg";
        var p = document.createElement("p");
        var textNode = document.createTextNode(newIngredient);
        p.appendChild(textNode);
        div.appendChild(img);
        div.appendChild(p);
        document.getElementsByClassName("input-ingredients")[0].appendChild(div);
    }
    else {
        console.log("The entered ingredient already exists in the list");
    }
}

function ingredientExists(ingredient) {
    var exists = inputIngredients.indexOf(ingredient);
    return (exists !== -1) ? true : false;
}
