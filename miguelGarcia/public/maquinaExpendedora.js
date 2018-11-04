
//comprobar si el cliente es admin

function admin(nombre){
 
   if (clientes[indiceCliente(nombre)].admin){ return true;} 


}

// funcion para crear cliente

function crearCliente(nombre, usuario,pass,admin,saldo) {

    if (arguments.length === 5 && !comprobarCliente(nombre)) {    
    clientes[clientes.length] = new Cliente (nombre, usuario,pass,admin,saldo); }
    if (arguments.length < 5) {console.log("faltan datos para crear el cliente ");}
    if (comprobarCliente(nombre)){console.log("cliente duplicado")}
}

// funcion para eliminar un cliente

function eliminarCliente(nombre){

    if (comprobarCliente(nombre)){

        clientes.splice(indiceCliente(nombre),1);
    } 
else console.log("El cliente especificado no existe");
}

// funcion para comprobar si existe el cliente

function comprobarCliente(nombre){

    for(var i=0; i < clientes.length ; i++){

        if (clientes[i].nombre === nombre) {
            return true;
        } 
        //else return false;
    }
}

//funcion para obtener el indice de un cliente
function indiceCliente(nombre){
    for(var i=0; i < clientes.length ; i++){
        if (clientes[i].nombre === nombre) {
            return i;
        } 
       // else return false;
    }
}

//funcion para comprobar el pass de un cliente

function comprobarPass(nombre,pass){
if (clientes[indiceCliente(nombre)].pass === pass){return true;}
else return false;
}

//clase clientes  

class Cliente {
    //constructor de clientes
    constructor( nombre, usuario, pass, admin, saldo){
        this.nombre = nombre;
        this.usuario = usuario;
        this.pass = pass;
        this.admin = admin;
        this.saldo = saldo;   
    }
}

//Array de objetos (clientes)
var clientes = [];

// clientes predefinidos 
clientes[0] = new Cliente('pedro','peter','pedro2018',true,100);
clientes[1] = new Cliente('federico','fede','federico2018',false,75);


//metodo para comprobar saldo de un cliente

function saldo(nombre, pass){

    if (comprobarCliente(nombre) && comprobarPass(nombre,pass)){ 
        return clientes[indiceCliente(nombre)].saldo; 
        }
    else console.log("Nombre de usuario o contraseña incorrectos");

}


// ------------------------------- PASO 4 ----------------------------------------//

//Array de productos ( array de objetos) 

class Despensa {

    constructor (nombreProducto,codigo, stock,disponibilidad,precio) {

        this.nombreProducto = nombreProducto;
        this.codigo = codigo;
        this.stock = stock;
        this.disponibilidad = disponibilidad;
        this.precio = precio;

    
}
}

// comprobar passAdmin

function comprobarPassAdmin(passAdmin){
        if (passAdmin === "fictiziaMola") {return true;}
        else return false;
    } 



// crear producto

function crearProducto(nombre,passAdmin, nombreProducto,codigo,stock,disponibilidad,precio)
{
    if (admin(nombre) && comprobarPassAdmin(passAdmin)){

productos[productos.length] = new Despensa(nombreProducto,codigo,stock,disponibilidad,precio);
    }


}
// localizar producto por nombre 


function indiceProducto(nombreProducto){
    for(var i=0; i < productos.length ; i++){
        if (productos[i].nombreProducto === nombreProducto) {
            return i;
        } 
       // else return false;
    }
}

//array de productos
var productos = [    

    {
        nombreProducto: "Kitkat",
        codigo:"kk",
        stock:10,
        disponibilidad: true,
        precio:5
    },

    {
        nombreProducto: "toke",
        codigo:"tk",
        stock:20,
        disponibilidad: true,
        precio:5
    },


    {
        nombreProducto: "maltesears",
        codigo:"mlt",
        stock:25,
        disponibilidad: true,
        precio:6
    },


    {
        nombreProducto: "Toblerone",
        codigo:"tlb",
        stock:40,
        disponibilidad: true,
        precio:7
    },

    {
        nombreProducto: "risquetos",
        codigo:"rtq",
        stock:3,
        disponibilidad: true,
        precio:4
    }

];


//comprar producto
function comprarProducto(nombre,pass,nombreProducto){

if (comprobarCliente(nombre)){
    if (comprobarPass(nombre,pass)){

        if (productos[indiceProducto(nombreProducto)].disponibilidad){

            if (clientes[indiceCliente(nombre)].saldo >= productos[indiceProducto(nombreProducto)].precio) {

                clientes[indiceCliente(nombre)].saldo -= productos[indiceProducto(nombreProducto)].precio;
                productos[indiceProducto(nombreProducto)].stock-- ;
                if (productos[indiceProducto(nombreProducto)].stock < 1){productos[indiceProducto(nombreProducto)].disponibilidad = false;}
                return console.log("Acabas de comprar " + productos[indiceProducto(nombreProducto)].nombreProducto + " y te quedan " + clientes[indiceCliente(nombre)].saldo + " creditos");

                ;
                     }


                }

                



                


    }else return console.log("La contraseña no coincide con el usuario")
        

}
else return console.log("No encuento el nombre del cliente")

}

// Imprimir Informe de la despensa

function imprimirDespensa(nombre,pass){
    if (comprobarCliente(nombre)){
        if (admin(nombre) && comprobarPass(nombre,pass)) {
        var ahora= new Date;
        console.log(ahora);
        console.log("*****************************************************");
        console.log("**********  Tenemos " + productos.length + " productos ***********")
        console.log("-----------------------------------------------------");

        for (i = 0; i < productos.length ; i++){

        console.log("Nombre: " + productos[i].nombreProducto  );
        console.log("Codigo: " + productos[i].codigo  );
        console.log("Stock: " + productos[i].stock  );
        console.log("Disponibilidad: " + productos[i].disponibilidad  );
        console.log("-----------------------------------------------------");


            }
        } else return console.log("No eres Administrador o la contraseña es incorrecta") ;  
    }    
    else return console.log("Nombre de usuario no reconocido");
}



// Agregar saldo. Solo puede hacer si eres administrador
function agregarSaldo(usuario,nombreCliente,aporte){
    if (admin(usuario) && comprobarCliente(nombreCliente) && typeof(aporte)==="number" && aporte >0 ){

        clientes[indiceCliente(nombreCliente)].saldo += aporte;
        console.log("Ahora el saldo de " + nombreCliente + " es " + clientes[indiceCliente(nombreCliente)].saldo );

    }
}



