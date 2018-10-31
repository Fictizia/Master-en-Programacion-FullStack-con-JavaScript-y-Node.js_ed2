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


function getClientBudget(username) {
    var client = getClient(username);
    return (client !== -1) ? client.budget : -1;
}

function clientIsAuthorized(username, password) {
    var storedPassword = getClientPassword(username);
    return password === storedPassword;
}

function getClientPassword(username) {
    var client = getClient(username);
    return (client !== -1) ? client.password : null;
}

function addClient(client) {
    if(clientHasPrivileges(client)){
        if (clientIsValid(client)){
            if (!clientExists(client)) {
                clients.push(client);
                console.log("Client added successfully");
            }
            else {
                console.log("Error adding client. Client already exists.");
            }
        }
        else {
            console.log("Error adding client. Client has some not valid fields.");
        }
    }
    else {
        console.log("Error adding client. Client is not authorized to do this task.");
    }
}

function clientExists(client) {
    return (getClient(client.username) !== -1) ? true : false;
}

function removeClient(client) {
    if(clientHasPrivileges(client)){
        if (clientExists(client)) {
            var usernames = clients.map(function(client) { return client.username; } );
            var index = usernames.indexOf(client.username);
            clients.splice(index, 1);
            console.log("Client removed successfully");
        }
        else {
            console.log("Error removing client. Client doesn't exists.");
        }
    }
    else {
        console.log("Error adding client. Client is not authorized to do this task.");
    }
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

function clientHasPrivileges() {
    var failedAttempts = 0;
    var maxAllowedFailedAttempts = 3;
    var correctKeyword = "Fictizia mola mucho";
    var keywordIsCorrect = false;
    
    do
    {
    var inputKeyword = prompt("Please, enter the keyword");
    if (inputKeyword === correctKeyword) {
      keywordIsCorrect = true;
      console.log("User authorized");
    }
    else {
        failedAttempts++;
        console.log("User NO authorized (failed attempts: " + failedAttempts + ")");
    }
    } while (failedAttempts < maxAllowedFailedAttempts && !keywordIsCorrect);
    
    if (failedAttempts >= maxAllowedFailedAttempts)
    {
    console.log("Max number of attempts reached");
    }
    
    return keywordIsCorrect;
}
```