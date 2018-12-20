maquina = {

  bbddClientes: [
    // admin
    {
      nombre: 'admin',
      usuario: 'admin',
      contrasena: 'ficticiaMola',
      tipo: 1,
      presupuesto: 100
    },
    // users
    {
      nombre: 'user1',
      usuario: 'user1',
      contrasena: '1234',
      tipo: 0,
      presupuesto: 50
    },
    {
      nombre: 'user2',
      usuario: 'user2',
      contrasena: '5678',
      tipo: 0,
      presupuesto: 50
    }
  ],

  gestionClientes: {

    gestionClientesUtils: {

      searchClient: function (userId) {
        var searched;
        maquina.bbddClientes.forEach(function (item) {
          if (item.usuario === userId) {
            searched = true;
          }
        });
        return searched;
      },

      correctDataClient: function (cliente) {
        var nuevoCliente = {
          nombre: cliente.nombre,
          usuario: cliente.usuario,
          contrasena: cliente.contrasena,
          tipo: cliente.tipo,
          presupuesto: cliente.presupuesto
        };
        return nuevoCliente;
      },

      login: function (userId, pass) {
        var logged = maquina.bbddClientes.filter(function (item) {
          return item.usuario === userId && item.contrasena === pass;
        });
        if (logged.length > 0) {
          console.log('Usuario logueado');
          return true;
        } else {
          console.warn('ERROR de autenticación');
          return false;
        }
      }

    },

    //Consultar saldo de un cliente

    checkCash: function (userId, pass) {

      var tools = maquina.gestionClientes.gestionClientesUtils;

      if (tools.login(userId, pass)) {
        maquina.bbddClientes.forEach(function (item) {
          if (item.nombre === userId) {
            if (item.presupuesto > 0) {
              console.warn('Saldo: ' + item.presupuesto);
            } else {
              console.warn('Saldo: -1');
            }
          }
        });
      }
    },

    //Agregar un cliente

    createCliente: function (applicant, isAdmin) {

      var tools = maquina.gestionClientes.gestionClientesUtils;

      if (typeof isAdmin === 'undefined' || isAdmin === '' || isAdmin !== 'ficticiaMola') {
        console.warn('ERROR: No has proporsionado la contraseña o tu contraseña es inválida')
      } else {
        if ((applicant instanceof Object) && !Array.isArray(applicant)) {
          var pseudoCliente = tools.correctDataClient(applicant);
          var counter = 0;

          for (var value in pseudoCliente) {
            if (pseudoCliente[value] === '' || pseudoCliente[value] === undefined) {
              counter++;
            }
          }

          (counter === 0) ? maquina.gestionClientes._addCliente(pseudoCliente) : console.warn('ERROR: faltan datos del cliente');

        } else {
          console.warn('ERROR: ' + applicant + ', no es un formato válido');
        }
      }
    },

    removeCliente: function (userId, isAdmin) {

      var tools = maquina.gestionClientes.gestionClientesUtils;

      if (typeof isAdmin === 'undefined' || isAdmin === '' || isAdmin !== 'ficticiaMola') {
        console.warn('ERROR: No has proporsionado la contraseña o tu contraseña es inválida')
      } else {
        var isCliente = tools.searchClient(userId);
        if (isCliente) {
          for (var i = 0; i < maquina.bbddClientes.length; i++) {
            if (maquina.bbddClientes[i].usuario === userId) {
              maquina.bbddClientes.splice(i, 1);
              console.warn('user: ' + userId + ' eliminado de la base de datos');
            }
          }
        } else {
          console.warn('ERROR: el usuario no existe');
        }
      }
    },

    _addCliente: function (nuevoCliente) {

      var tools = maquina.gestionClientes.gestionClientesUtils;

      var isCliente = tools.searchClient(nuevoCliente);
      if (isCliente) {
        console.warn('ERROR: el cliente ya existe en la base de datos');
      } else {
        maquina.bbddClientes.push(nuevoCliente);
        console.warn('Cliente agregado correctamente');
      }
    },
  
    updateCash: function (user, precio) {
      var update = maquina.bbddClientes.filter(function(item) {
        if (item.usuario === user) {
          return item.presupuesto -= precio;
        }
      });
      console.warn('Cliente ' + user + '. Saldo actualizado ' + update[0].presupuesto + '€');
    },
  
    addCash: function(userId, howMuch, isAdmin) {

      var tools = maquina.gestionClientes.gestionClientesUtils;

      if (typeof isAdmin === 'undefined' || isAdmin === '' || isAdmin !== 'ficticiaMola') {
        console.warn('ERROR: No has proporsionado la contraseña o tu contraseña es inválida')
      } else if (tools.searchClient(userId)) {
        var user = maquina.bbddClientes.filter(function(item) {
          return item.usuario === userId;
        });
        user[0].presupuesto += howMuch;
        console.warn('Has cargado ' + howMuch + ' al usuario: ' + userId + '. Saldo actual: ' + user[0].presupuesto);
      } else {
        console.warn('ERROR: usuario no encontrado');
      }
    },
  
    resetCash: function(userId, isAdmin) {

      var tools = maquina.gestionClientes.gestionClientesUtils;

      if (typeof isAdmin === 'undefined' || isAdmin === '' || isAdmin !== 'ficticiaMola') {
        console.warn('ERROR: No has proporsionado la contraseña o tu contraseña es inválida');
      } else if( tools.searchClient(userId)) {
        var user = maquina.bbddClientes.filter(function(item) {
          return item.usuario === userId;
        });
        user[0].presupuesto = 0;
        console.warn('Ahora el presupuesto del usuario: ' + userId + ' es: ' + user[0].presupuesto);
      } else {
        console.warn('ERROR: usuario no encontrado');
      }
    },
  
    removeCash: function(userId, howMuch, isAdmin) {

      var tools = maquina.gestionClientes.gestionClientesUtils;

      if (typeof isAdmin === 'undefined' || isAdmin === '' || isAdmin !== 'ficticiaMola') {
        console.warn('ERROR: No has proporsionado la contraseña o tu contraseña es inválida');
      } else if( tools.searchClient(userId)) {
        var user = maquina.bbddClientes.filter(function(item) {
          return item.usuario === userId;
        });
        if (user[0].presupuesto - howMuch <= 0) {
          console.warn('ERROR: no está permitido quedarse con saldo negativo: ' + (user[0].presupuesto - howMuch));
        } else {
          user[0].presupuesto -= howMuch;
          console.warn('Has retirado ' + howMuch + '. Nuevo saldo: ' + user[0].presupuesto);
        }
      } else {
        console.warn('ERROR: usuario no encontrado');
      }
    }
  
  },

  bbddProductos: [
    {
      nombre: 'Risketos',
      codigo: 'C1',
      stock: 100,
      disponibilidad: true,
      precio: 1
    },
    {
      nombre: 'KitKat',
      codigo: 'C2',
      stock: 4,
      disponibilidad: true,
      precio: 2
    },
    {
      nombre: 'Chicles Orbit',
      codigo: 'C3',
      stock: 6,
      disponibilidad: true,
      precio: 4
    },
    {
      nombre: 'Pipas Solero',
      codigo: 'C4',
      stock: 1,
      disponibilidad: true,
      precio: 3
    },
    {
      nombre: 'Demonios de Fresa',
      codigo: 'C5',
      stock: 10,
      disponibilidad: true,
      precio: 2
    },
    {
      nombre: 'Chetos',
      codigo: 'C6',
      stock: 5,
      disponibilidad: true,
      precio: 3
    },
  ],

  gestionProductos: {

    gestionProductosUtils: {

      _isCorrectFormat: function (pseudoProduct) {
        var newProducto = {
          nombre: pseudoProduct.nombre,
          codigo: pseudoProduct.codigo,
          stock: pseudoProduct.stock,
          disponibilidad: pseudoProduct.disponibilidad,
        };
        return newProducto;
      },

      _isAlredyExits: function (codigoProducto) {
        var added = maquina.bbddProductos.filter(function (item) {
          if (item.codigo === codigoProducto) {
            return item;
          }
        });
        return (added.length > 0);
      },

      _updateStock: function (producto) {
        if (producto[0].stock > 0) {
          producto[0].stock = --producto[0].stock;
          console.warn('Enviando... ' + producto[0].nombre);
          console.warn('Stock actualizado, quedan ' + producto[0].stock + ' ' + producto[0].nombre);
        } else {
          producto[0].disponibilidad = false;
          console.warn('ERROR: producto agotado, -1');
          return false;
        }
      },

      _isAdmin: function(userId, password) {
        var user = maquina.bbddClientes.filter(function(item) {
          return item.usuario === userId && item.contrasena === password;
        });
        return user.length > 0;
      },
    },


    pickProducto: function (user, password, codigoProducto) {

      var toolsProduct = maquina.gestionProductos.gestionProductosUtils;
      var toolsClient = maquina.gestionClientes.gestionClientesUtils;

      if (toolsClient.login(user, password)) {
        if (toolsProduct._isAlredyExits(codigoProducto)) {
          var picked = maquina.bbddProductos.filter(function (item) {
            return item.codigo === codigoProducto;
          });
          toolsProduct._updateStock(picked);
          maquina.gestionClientes.updateCash(user, picked[0].precio);
        } else {
          console.warn('ERROR: el producto con código ' + codigoProducto + ' no existe');
        }
      }
    },
  
    addProducto: function (newProducto, isAdmin) {

      var toolsProduct = maquina.gestionProductos.gestionProductosUtils;

      if (typeof isAdmin === 'undefined' || isAdmin === '' || isAdmin !== 'ficticiaMola') {
        console.warn('ERROR: No has proporcionado la contraseña o tu contraseña es inválida');
      } else {
  
        var pseudoProducto = toolsProduct._isCorrectFormat(newProducto);
        var counter = 0;
        for (var value in pseudoProducto) {
          if (pseudoProducto[value] === '' || pseudoProducto[value] === undefined) {
            counter++;
          }
        }
  
        if (counter > 0) {
          console.warn('ERROR: falta indformación del producto');
          return;
        } else {
          if (toolsProduct._isAlredyExits(newProducto.codigo)) {
            console.warn('ERROR: el poducto ya existe en la base de datos');
            return;
          } else {
            maquina.bbddProductos.push(newProducto);
            console.warn('Producto agregado correctamente');
          }
        }
  
      }
    },
  
    removeProducto: function (codigoProducto, isAdmin) {
      if (typeof isAdmin === 'undefined' || isAdmin === '' || isAdmin !== 'ficticiaMola') {
        console.warn('ERROR: No has proporsionado la contraseña o tu contraseña es inválida');
      } else {
        var index = null;
        for (var i = 0; i < maquina.bbddProductos.length; i++) {
          if (maquina.bbddProductos[i].codigo === codigoProducto) {
            index = i;
          }
        }
        if (index !== null) {
          maquina.bbddProductos.splice(index, 1)
          console.warn('Producto eliminado de la base de datos correctamente');
        } else {
          console.warn('ERROR: ningún producto con el código ' + codigoProducto + ' en la base de datos');
        }
      }
    },

    getAllProductos: function(userId, password) {

      var toolsProduct = maquina.gestionProductos.gestionProductosUtils;

      if (toolsProduct._isAdmin(userId, password)) {
        var prod = maquina.bbddProductos.filter(function(item) {
          return item.nombre;
        });
        console.warn('Lista de productos en la máquina:');
        prod.forEach(function (item) {
          console.log(item.nombre);
        })
      } else {
        console.warn('ERROR: No has proporsionado la contraseña o tu contraseña es inválida');
      }
    },

    availabilityProducto: function(userId, password) {

      var toolsProduct = maquina.gestionProductos.gestionProductosUtils;

      if (toolsProduct._isAdmin(userId, password)) {
        var disponibles = [];
        var noDisponibles = [];
        maquina.bbddProductos.forEach(function (item) {
          if (item.disponibilidad === true) {
            disponibles.push(item);
          } else {
            noDisponibles.push(item);
          }
        });
        console.warn('productos disponibles');

        disponibles.forEach(function(item) {
          console.log('nombre: ' + item.nombre + ', código: ' + item.codigo);
        });

        console.warn('productos NO disponibles');

        noDisponibles.forEach(function(item) {
          console.log('nombre: ' + item.nombre + ', código: ' + item.codigo);
        });

      } else {
        console.warn('ERROR: No has proporsionado la contraseña o tu contraseña es inválida');
      }
    },

    printInform: function(userId, password) {

      var toolsProduct = maquina.gestionProductos.gestionProductosUtils;

      if (toolsProduct._isAdmin(userId, password)) {
        console.log('************************');
        console.log('En total tenemos: ' + maquina.bbddProductos.length + ' productos');

        maquina.bbddProductos.forEach(function(item) {
          console.log('----------------------------');
          console.log('Nombre: ' + item.nombre);
          console.log('Código: ' + item.codigo);
          console.log('Stock: ' + item.stock);
          console.log('Dispnibilidad: ' + item.disponibilidad);
        });
        console.log('************************');
      } else {
        console.warn('ERROR: No has proporsionado la contraseña o tu contraseña es inválida');
      }
    }
  },

}