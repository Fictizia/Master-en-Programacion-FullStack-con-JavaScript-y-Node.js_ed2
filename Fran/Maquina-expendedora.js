var maquinaExpendedora = {};
var productos = [{producto: 'eneryeti', stock: 1000, precio: 1}, {producto: 'monster', stock: 1000, precio: 2}, {producto: 'pepinillos', stock: 800, precio: 1}, {producto: 'tabaco', stock: 420, precio: 5}, {producto: 'pizza', stock: 500, precio: 3}];
var masterKey = 'ficticiaMola';

//ARRAY DE CLIENTES
var clientes = [{usuario: 'yo', contraseña: 'yo', esAdmin: true, presupuesto: 9999, gasto: 0}];


//INICIO DE SESIÓN
var sesion = 'nada'; 

function iniciarSesion(iniuser, inipass){
var iniuser = prompt('usuario');
var inipass = prompt('contraseña');
var found = clientes.find(function(element){
        return element.usuario == iniuser; 

});
  if(found.contraseña == inipass){
    console.log('SESIÓN INICIADA CORRECTAMENTE');
    sesion = found;
  }
  else{
    console.log('ERROR EN INICIO DE SESIÓN');
    sesion = 'nada';
  }
}

//INICIAR SESIÓN AL EMPEZAR
iniciarSesion();

//AÑADIR NUEVO CLIENTE
function addCliente(x) {

    if(prompt('LA CONTRASEÑA DAME') == masterKey){
var x = new Cliente(prompt('nombre'), prompt('contraseña'), false, 50);
var found = clientes.find(function(element){
        return element.usuario == x.usuario; 
});
if(found == undefined){   // EVITA AÑADIR USUARIOS DUPLICADOS
clientes.push(x);
console.log('¡¡¡¡¡NUEVO CLIENTE!!!!!!');
}}}

//CONSTRUCTOR DE CLIENTES
function Cliente(usuario, contraseña, esAdmin, presupuesto, gasto){
      this.usuario = usuario;
      this.contraseña = contraseña;
      this.esAdmin = false;
      this.presupuesto = 50;
      this.gasto = 0;
};

//ELIMINAR CLIENTE
function eliminarCliente(x) {
      if(prompt('DIME LA PASS') == masterKey){
    var x = prompt('¿Qué cliente deseas eliminar?');
    var found = clientes.find(function(element){
        return element.usuario == x; //RETORNA EL ELEMENTO QUE COINCIDE CON LA CONDICIÓN
    });
    clientes.push(clientes.splice(clientes.indexOf(found), 1)[0]); //PONER UN ELEMENTO EL ÚLTIMO EN EL ARRAY...
clientes.pop(); //...PARA ELIMINARLO
console.log('CLIENTE ELIMINADO');
}};

//CONSULTAR SALDO 
function consultaSaldo(){
    if (prompt('DIME TU USUARIO') == sesion.usuario && prompt('DIME TU CONTRASEÑA') == sesion.contraseña){
    console.log('Tu saldo es de: ' + sesion.presupuesto + ' puntos');
}
else{
    console.log('ERROR AL INTRODUCIR LOS DATOS');
    return -1;
}
}



//AÑADIR PRODUCTOS A LA MAQUINA
function addProducto(x){
    if(sesion.esAdmin == true && prompt('DAME LA PASSWORD') == masterKey){
    var x = new Producto(prompt('¿Qué producto deseas añadir?'), prompt('¿Cuántas unidades hay?'), prompt('¿Cuántos puntos cuesta?'));
    productos.push(x);}
}
//CONSTRUCTOR DE PRODUCTOS
function Producto(producto, stock, precio){
      this.producto = producto;
      this.stock = stock;
      this.precio = precio;
};

//ELIMINAR PRODUCTOS
function eliminarProducto(x){
    if(sesion.esAdmin == true && prompt('LA CONTRASEÑA O TE RAJO') == masterKey){
    var x = prompt('¿Qué producto deseas eliminar?');
var found = productos.find(function(element) {
  return element == x;
});    
console.log('se ha eliminado ' + found + ' de la máquina'); 
productos.push(productos.splice(productos.indexOf(found), 1)[0]);
    productos.pop();

}}


//CONSULTAR GASTOS
function consultaGastos(){
    if (prompt('DIME TU USUARIO') == sesion.usuario && prompt('DIME TU CONTRASEÑA') == sesion.contraseña){
    console.log('Has gastado ' + sesion.gasto + ' puntos');
}
else{
    console.log('ERROR AL INTRODUCIR LOS DATOS');
    return -1;
}
}


//COMPRAR
function comprar(){

  var seleccion = prompt('¿Qué quieres comprar?');
  var cantidad = prompt('¿Cuántos ' + seleccion + ' quieres?');
var found = productos.find(function(element) {
  return element.producto == seleccion;
}); 
console.log('Has comprado ' + cantidad + ' ' + found.producto);
found.stock = found.stock - cantidad;
sesion.gasto = sesion.gasto + (found.precio * cantidad);
sesion.presupuesto = sesion.presupuesto - (found.precio * cantidad);

}


// AGREGAR, RETIRAR Y RESETEAR SALDO

function agregarRetirarSaldo(){
if(prompt('SU CONTRASEÑA POR FAVOR, CABALLERO') == sesion.contraseña){
   var quequieres = prompt('¿Qué quieres hacer, 1 - Agregar Saldo, 2 - Retirar Saldo');
   if(quequieres == 1 || quequieres == 'Agregar' || quequieres == 'Agregar Saldo'){
        var cuantosaldo = parseInt(prompt('Cuánto saldo deseas añadir'));
       
            sesion.presupuesto = sesion.presupuesto + cuantosaldo;
            return sesion.presupuesto;
      
   }
   else if(quequieres == 2 || quequieres == 'Retirar' || quequieres == 'Retirar Saldo'){
        var cuantosaldo = parseInt(prompt('Cuánto saldo deseas retirar'));

            if(sesion.presupuesto - cuantosaldo >= 0){
            sesion.presupuesto = sesion.presupuesto - cuantosaldo;
        }
        else {
            sesion.presupuesto = 0;
        }
            return sesion.presupuesto;
        
   }}}

function resetearSaldo(){
  if(sesion.esAdmin == true && prompt('LA CONTRASEÑA POR FAVOR, CABALLERO') == masterKey){  
    var reseteo = prompt('¿A qué usuario quieres resetear?');
    var found = clientes.find(function(element) {
  return element.usuario == reseteo;
});
    found.presupuesto = 0; 
    return found.presupuesto;
} }






