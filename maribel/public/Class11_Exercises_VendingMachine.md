## Máquina expendedora

**Práctica 1.** Diseña un script para gestionar por consola una máquina expendedora

**Paso 1.** Creamos los primeros objetos básicos:
- Maquina Expendedora (Objeto)
- Productos (Array)
- Clientes (Array)
```javascript
var vendingMachine = {};
var products = [];
var clients = [];
```

**Paso 2.** Creamos los primeros perfiles en el Array de clientes:
- Propiedades:
    - Nombre
    - Usuario
    - Contraseña
    - Tipo usuario
    - Presupuesto
```javascript
var client1 = {
    name: "Doraemon",
    username: "doracat",
    password: "dorayaki",
    role: "admin",
    budget: 10
};

var client2 = {
    name: "Oliver",
    username: "oli_atom",
    password: "1234",
    role: "user",
    budget: 10
};

var client3 = {
    name: "Lisa",
    username: "lisasimpson",
    password: "library",
    role: "user",
    budget: 10
};

clients.push(client1);
clients.push(client2);
clients.push(client3);
```

**Paso 3**. Creamos varios métodos para gestionar a los clientes y sus necesidades
- Metodos:
    - Consultar saldo de un cliente
        - Devolverá el saldo existente o *-1* en caso de error
        - Comprobaremos la contraseña y el usuario
    - Consultar gastos de un cliente
        - Devolverá un array o *false* en caso de error
        - Comprobaremos la contraseña y el usuario
    - Agregar un cliente
    - Eliminar un cliente

- Caracteristicas:
    - Evitaremos que se registren usuarios que ya existan
    - Evitaremos eliminar usuarios que no existan
    - Evitaremos dar de alta usuarios que no esten debidamente cumplimentados
    - Protegeremos las funciones de gestión de usuarios con la contraseña *ficticiaMola*

```javascript
function getClientBudget() {
    var username = prompt("Please, enter your username:");
    var password = prompt("Please, enter your password:");
    if(credentialsAreCorrect(username, password)){
        var client = getClient(username);
        return (client !== -1) ? client.budget : -1;
    }
}

function getClientExpenses(username){
    // TODO
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
```

**Paso  4.** Creamos varios métodos para gestionar a los productos y sus necesidades
Creamos 5 productos que estarán disponibles a la venta
- Métodos:
    - Consumir un producto (cliente)
        - Comprobaremos la contraseña y el usuario
        - Devolverá el producto o -1 en caso de no existir o estar agotado
        - Actualizaremos el stock
        - Actualizaremos el saldo del cliente
    - Agregar un producto a la máquina (administración)
    - Eliminar un prodcutos de la máquina (administración)

- Caracteristicas:
    - Evitaremos agregar productos que ya existan
    - Evitaremos eliminar productos que no existan
    - Evitaremos agregar productos que no esten debidamente cumplimentados
    - Protegeremos las funciones de agregar y eliminar productos con la contraseña *ficticiaMola*

```javascript
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
```

**Paso 5**. (Nivel Medio) Ahora podemos agregar los métodos para agregar, retirar y resetear saldo de los usuarios.
- Importante:
    - Los saldos jamas pueden ser negativos.

```javascript
function incrementClientBudget(client, quantity){
    client.budget += quantity;
}

function decrementClientBudget(client, quantity){
    client.budget -= quantity;
}

function resetClientBudget(client, quantity){
    client.budget = quantity;
}
```

**Paso 6.** (Nivel Avanzado) Ahora podemos agregar el método para saber la disponibilidad de stock
- Importante:
    - Es necesaria clave (adminsitrador)
    - Debemos saber las existencias
    - Debemos saber que productos estan disponibles y cuales no.
    - Debemos incluir el código y el nombre
    - Cuando se imprima el informe... es necesario incluir la fecha.

```javascript
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
```
