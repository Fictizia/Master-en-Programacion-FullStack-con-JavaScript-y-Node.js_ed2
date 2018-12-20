var products = [];
var clients = [];
var machine = {}

clients['username01'] = {name:'Nombre del cliente 1',username:'username01',password:'password01',type:'client',budget:100, purchases: null};
clients['username02'] = {name:'Nombre del cliente 2',username:'username02',password:'password02',type:'client',budget:50, purchases: null};
clients['username03'] = {name:'Nombre del cliente 3',username:'username03',password:'password03',type:'client',budget:25, purchases: null};
clients['username04'] = {name:'Nombre del cliente 4',username:'username04',password:'password04',type:'client',budget:10, purchases: null};
clients['username05'] = {name:'Nombre del cliente 5',username:'username05',password:'password05',type:'client',budget:0, purchases: null};

machine.clients = clients;

machine.getClientByUsername = function(username) {
  return this.clients[username];
}

//console.log(machine.getClientByUsername('username01'))

machine.getClient = function(username, password) {

  var client = this.getClientByUsername(username);

  if(client.username !== username || client.password !== password){
    console.log('Error de autenticación en getClient');
    return false;
  }

  return client;
}

machine.getClientBudget = function(username, password) {

  var client = this.getClient(username, password);
  if(client){
    return client.budget;
  }else{
    return false;
  }

}

machine.getClientPurchases = function(username, password) {

  var client = this.getClient(username, password);
  if(client){
    return client.purchases;
  }else{
    return false;
  }

}

machine.setClient = function(passAdmin, name, username, password){

  if(passAdmin !== 'fictiziaMola'){
    console.log('No tienens permisos');
    return false;
  }

  this.clients.forEach(client => {
    if(client.username === username){
      console.log('Username Repetido');
      return false;
    }
  });

  if(name === '' || username === '' || password === ''){
    console.log('Faltan datos para el cliente');
    return false;
  }

  var newClient = {
    name:name,
    username: username,
    password: password,
    type: 'client',
    budget: 0,
    purchases: null
  }

  this.clients[username] = newClient;
}

machine.removeClient = function(passAdmin, username) {
  if(passAdmin !== 'fictiziaMola'){
    console.log('No tienens permisos');
    return false;
  }

  if(this.clients[username] == null){
    console.log('no puedes borrar un elemento que no existe');
    return false;
  }

  var position = this.clients[username];
  console.log(position);
}

machine.removeClient('fictiziaMola','username04')
