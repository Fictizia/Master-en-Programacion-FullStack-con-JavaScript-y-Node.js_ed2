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

function searchRecipesByIngredients() {
    var ingredients = inputIngredients.join("%2C");
    var fillIngredients = true;
    var limitLicense = false;
    var number = 5;
    var ranking = 2;

    var parameters = "?ingredients=" + ingredients + "&fillIngredients=" + fillIngredients + "&limitLicense=" + limitLicense + "&number=" + number + "&ranking=" + ranking;
    var completeUrl = baseUrl.concat(parameters);

    console.log(completeUrl);

    xmlHttp.onreadystatechange = function()
    {
        if(xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            console.log(JSON.parse(xmlHttp.responseText));
        }
        else if(xmlHttp.readyState === 4){
            console.log("Error getting data. Status code: " + xmlHttp.status);
        }
    }

    xmlHttp.open("GET", completeUrl, true);
    xmlHttp.setRequestHeader("X-Mashape-Key", apiKey);
    xmlHttp.setRequestHeader("Accept", "application/json");
    xmlHttp.send();
}

function addIngredientToList(){
    // TODO check if the input ingredient already exists
    var newIngredient = document.getElementsByName("ingredientInput")[0].value;
    inputIngredients.push(newIngredient);

    var node = document.createElement("li");
	var textNode = document.createTextNode(newIngredient);
	node.appendChild(textNode);
	document.getElementById("ingredients-list").appendChild(node);
}
