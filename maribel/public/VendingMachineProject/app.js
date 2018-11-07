/*** Vending Machine Project ***/

var vendingMachine = {};
var products = [];
var clients = [];

var client1 = {
    name: "Doraemon",
    username: "doracat",
    password: "dorayaki",
    role: "admin",
    budget: 10,
    expenses: []
};

var client2 = {
    name: "Oliver",
    username: "oli_atom",
    password: "1234",
    role: "user",
    budget: 10,
    expenses: []
};

var client3 = {
    name: "Lisa",
    username: "lisasimpson",
    password: "library",
    role: "user",
    budget: 10,
    expenses: []
};

clients.push(client1);
clients.push(client2);
clients.push(client3);

function getClientBudget() {
    var username = prompt("Please, enter your username:");
    var password = prompt("Please, enter your password:");
    if(credentialsAreCorrect(username, password)){
        var client = getClient(username);
        return client.budget;
    }
    else
    {
        console.log("Error getting client budget. Client is not authorized to do this task.");
    }
}

function getClientExpenses(){
    var username = prompt("Please, enter your username:");
    var password = prompt("Please, enter your password:");
    if(credentialsAreCorrect(username, password)){
        var client = getClient(username);
        console.log("* * * * * * * * * * Client exepenses * * * * * * * * * *");
        for (var expense of client.expenses) {
            console.log("-------------------------")
            console.log("Product: " + expense.product.name);
            console.log("Quantity: " + expense.quantity);
        }
    }
    else
    {
        console.log("Error getting client expenses. Client is not authorized to do this task.");
    }
}

function addClient(clientToAdd) {
    if(clientIsValid(clientToAdd)){
        if (!clientExists(clientToAdd.username)){
            var username = prompt("Please, enter your username:");
            var password = prompt("Please, enter your password:");
            if (clientIsAdmin(username) && credentialsAreCorrect(username, password)) {
                clients.push(clientToAdd);
                console.log("Client added successfully");
            }
            else {
                console.log("Error adding client. Client is not authorized to do this task.");
            }
        }
        else {
            console.log("Error adding client. Client already exists.");
        }
    }
    else {
        console.log("Error adding client. Client has some not valid fields.");
    }
}

function removeClient(usernameToRemove) {
    if(clientExists(usernameToRemove)){
        var username = prompt("Please, enter your username:");
        var password = prompt("Please, enter your password:");
        if (clientIsAdmin(username) && credentialsAreCorrect(username, password)) {
            var usernames = clients.map(function(client) { return client.username; } );
            var index = usernames.indexOf(usernameToRemove);
            clients.splice(index, 1);
            console.log("Client removed successfully");
        }
        else {
            console.log("Error removing client. Client is not authorized to do this task.");
        }
    }
    else {
        console.log("Error removing client. Client doesn't exists.");
    }
}

function credentialsAreCorrect(username, password) {
    var storedPassword = getClientPassword(username);
    return (password === storedPassword);
}

function getClientPassword(username) {
    var client = getClient(username);
    return (client !== -1) ? client.password : null;
}

function clientExists(username) {
    return (getClient(username) !== -1) ? true : false;
}

function clientIsValid(client) {
    var isValid = true;
    for (var prop in client){
        if(!client[prop]){
            isValid = false;
            break;
        }
    }
    
    return isValid;
}

// Assume the username is unique
function getClient(username) {
    var foundClient;
    for (var client of clients) {
        if (client.username == username) {
            foundClient = client;
            break;
        }
    }
    
    return foundClient ? foundClient : -1;
}

function clientIsAdmin(username) {
    var client = getClient(username);
    return (client.role === "admin");
}

var products = []
var item1 = {
    name: "Risketos",
    code: "C1",
    stock: 100,
    isAvailable: true
}

var item2 = {
    name: "Kit-Kat",
    code: "C2",
    stock: 4,
    isAvailable: true
}


var item3 = {
    name: "Orbit Gum",
    code: "C3",
    stock: 10,
    isAvailable: true
}


var item4 = {
    name: "Conos 3D Matutano",
    code: "C4",
    stock: 50,
    isAvailable: true
}


var item5 = {
    name: "Actimel Natural",
    code: "C5",
    stock: 60,
    isAvailable: true
}

products.push(item1);
products.push(item2);
products.push(item3);
products.push(item4);
products.push(item5);

function dispenseProduct(productCode) {
    if(productExists(productCode)){
        var product = getProduct(productCode);
        if (productIsAvailable(product)){
            var username = prompt("Please, enter your username:");
            var password = prompt("Please, enter your password:");
            if(credentialsAreCorrect(username, password)){
                var client = getClient(username);
                if (clientCanPay(client)){
                    console.log("Processing request...");
                    product.stock--;
                    updateProductAvailability(product);
                    client.budget--;
                    
                    updateClientExpenses(client, product);
                    
                    console.log(product.name + "'s updated stock: " + product.stock);
                    console.log(client.name + "'s updated budget: " + client.budget);
                }
                else {
                    console.log("Sorry, client hasn't enough points to buy the requested item.");
                }
            }
            else {
                console.log("Incorrect credentials. Client is not authorized to do this task.");
            }
        }
        else {
            console.log("Sorry, the requested product is out of stock.");
        }
    }
    else {
        console.log("Sorry, the requested product doesn't exist.")
    }
}

function updateClientExpenses(client, product){
    if (hasClientBuyProductBefore(client, product)) {
        var index = getExpenseIndex(client, product);
        client.expenses[index].quantity++;
    }
    else {
        var expense = {
            product: product,
            quantity: 1
        }
        console.log(client);
        client.expenses.push(expense);
    }
}

function hasClientBuyProductBefore(client, product){
    var productHasBeenBoughtBefore = false;
    for (var expense of client.expenses) {
        if (expense.product.code === product.code) {
            productHasBeenBoughtBefore = true;
        }
    }
    
    return productHasBeenBoughtBefore;
}

function getExpenseIndex(client, product){
    var expenseIndex = -1;
    for (var i = 0; i < client.expenses.length; i++) {
        if (client.expenses[i].product.code === product.code) {
            expenseIndex = i;
            break;
        }
    }
    
    return expenseIndex;
}

function addNewProduct(product){
    if(productIsValid(product)){
        if (!productExists(product.code)){
            var username = prompt("Please, enter your username:");
            var password = prompt("Please, enter your password:");
            if(clientIsAdmin(username) && credentialsAreCorrect(username, password)){
                products.push(product);
                console.log("Product added successfully.");
            }
            else {
                console.log("Error adding product. Client is not authorized to do this task.");
            }
        }
        else {
            console.log("Error adding product. Product already exists.");
        }
    }
    else {
        console.log("Error adding product. Product has some not valid fields.");
    }
}

function removeProduct(code) {
    if(productExists(code)){
        var username = prompt("Please, enter your username:");
        var password = prompt("Please, enter your password:");
        if(clientIsAdmin(username) && credentialsAreCorrect(username, password)){
            var usernames = products.map(function(product) { return product.code; } );
            var index = products.indexOf(code);
            products.splice(index, 1);
            console.log("Product removed successfully");
        }
        else {
            console.log("Error removing product. Client is not authorized to do this task.");
        }
    }
    else {
        console.log("Error removing product. Products doesn't exists.");
    }
}

function productExists(code){
    return (getProduct(code) !== -1) ? true : false;
}

// Assume the product code is unique
function getProduct(productCode) {
    var foundProduct;
    for (var product of products) {
        if (product.code == productCode) {
            foundProduct = product;
            break;
        }
    }
    
    return foundProduct ? foundProduct : -1;
}

function productIsAvailable(product){
    return product.isAvailable;
}

function updateProductAvailability(product){
    if(product.stock === 0){
        product.isAvailable = false;
    }
}

function clientCanPay(client){
    return (client.budget > 0) ? true : false;
}

function productIsValid(product) {
    var isValid = true;
    for (var prop in product){
        if(!product[prop]){
            isValid = false;
            break;
        }
    }
    
    return isValid;
}

function doInventory(){
    var username = prompt("Please, enter your username:");
    var password = prompt("Please, enter your password:");
    if(clientIsAdmin(username) && credentialsAreCorrect(username, password)){
        console.log("* * * * * * * * * * Inventory * * * * * * * * * *");
        console.log("Total number of different products: " + products.length);
        for (var item of products) {
            console.log("-------------------------");
            console.log("Name: " + item.name);
            console.log("Code: " + item.code);
            console.log("Stock: " + item.stock);
            console.log("Is available: " + item.isAvailable);
        }
        console.log("* * * * * * * * * * * * * * * * * * * * * * * * *");
        var date = new Date();
        console.log("Date: " + date.toLocaleString());
        console.log("* * * * * * * * * * * * * * * * * * * * * * * * *");
    }
    else {
        console.log("Error doing inventory. Client is not authorized to do this task.");
    }
}
