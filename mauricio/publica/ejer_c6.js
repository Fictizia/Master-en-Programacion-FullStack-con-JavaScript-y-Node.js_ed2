// 1 - Diseña un algoritmo que lea dos números y los compare. Como resultado esperamos que nos diga cual es mayor... o si son iguales.

//if/else

function algoritmoIfElse (num1, num2) {
    if(num1 > num2) {
        console.log(`el mayor es el ${num1}`);
    } else if(num1 < num2) {
        console.log(`el mayor es el ${num2}`);
    } else {
        console.log(`${num1} y ${num2} son iguales`);
    }    
}

//operador ternario

function algoritmoTenario (num1, num2) {
    (num1 > num2) ? console.log(`el mayor es el ${num1}`) : (num1 < num2) ? console.log(`el mayor es el ${num2}`) : console.log(`${num1} y ${num2} son iguales`);
}


//switch

function algortmoSwith (num1, num2) {
    switch (true) {
        case (num1 > num2):
            console.log(`el mayor es el ${num1}`);
            break;
        case (num1 < num2):
            console.log(`el mayor es el ${num2}`);
            break;
        default:
            console.log(`${num1} y ${num2} son iguales`);
    }
}

// 2 - Diseña un script que lea tres números distintos y nos diga cual de ellos es el mayor.

// if/else

function distintosIfElse (num1, num2, num3) {
    if (num1 > num2) {
        if (num1 > num3) {
            console.log(`el ${num1} es el mayor`);
        } else {
            console.log(`el ${num3} es el mayor`);
        }
    } else if (num2 > num3) {
        console.log(`el ${num2} es el mayor`);
    } else {
        console.log(`el ${num3} es el mayor`);
    }
}

//ternario

function distintosTernario (num1, num2, num3) {
    (num1 > num2) ? (
        (num1 > num3) ? console.log(`el ${num1} es el mayor`) : console.log(`el ${num3} es el mayor`)
    ) : (num2 > num3) ? console.log(`el ${num2} es el mayor`) : console.log(`el ${num3} es el mayor`);
}

//switch

function distintosSwitch (num1, num2, num3) {
    switch (true) {
        case (num1 > num2):
            if (num1 > num3) {
              console.log(`el ${num1} es el mayor`);  
            } else {
              console.log(`el ${num3} es el mayor`);
            }
            break;
        case (num2 > num3):
            console.log(`el ${num2} es el mayor`);
            break;
        default:
            console.log(`el ${num3} es el mayor`);
    }
}

// 3 - Diseña un script que siga el siguiente proceso:

// Si el primero es negativo, debe sumar los otros dos
// Sino multiplicará los tres numeros
// Mostrar el resultado final incluyendo una referencia a la operación realizada.

// if/else

function negativoIfElse (num1, num2, num3) {
    if (num1 < 0) {
        let suma = num2 + num3;
        console.log('el primer numero es negativo. Sumo los otros dos números, resultado: ' + suma);
    } else {
        let producto = (num1 * num2) * num3;
        console.log('el primer numero es positivo. Multiplico los tres valores, resultado: ' + producto);
    }
}

// ternario

function negativoTernario (num1, num2, num3) {
    let suma;
    let producto;
    (num1 < 0) ? (
        suma = num2 + num3,
        console.log('el primer numero es negativo. Sumo los otros dos números, resultado: ' + suma)
    ) : (
        producto = (num1 * num2) * num3,
        console.log('el primer numero es positivo. Multiplico los tres valores, resultado: ' + producto)
    );
}

// switch

function negativoSwitch (num1, num2, num3) {
    switch (true) {
        case num1 < 0:
            let suma = num2 + num3;
            console.log('el primer numero es negativo. Sumo los otros dos números, resultado: ' + suma);
            break;
        case num1 >= 0:
            let producto = (num1 * num2) * num3;
            console.log('el primer numero es positivo. Multiplico los tres valores, resultado: ' + producto);
            break;
        default:
            // code
    }
}


// 4 - Nivel Medio ♠️ Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.

// Se aplica un 25% cuando:

// Estamos en los meses de invierno
// Y no es viernes o fin de semana.

// if/else

function descuentoIfElse() {
    
}

// ternario



// switch



// 5 - Diseña un algoritmo que al introducir un numero nos diga si es positivo o negativo.

// if/else

function positivoIfElse(num1) {
    if (num1 > 0) {
        console.log('el numero es positivo');
    } else if(num1 < 0) {
        console.log('el numero es negativo');
    } else {
        console.log('el numero es cero');
    }
}

// ternario

function positivoTernario(num1) {
    (num1 > 0) ? console.log('el numero es positivo') : (num1 < 0) ? console.log('el numero es negativo') : console.log('el numero es cero');
}

// switch

function positivoSwitch(num1) {
    switch (true) {
        case num1 > 0:
            console.log('el numero es positivo');
            break;
        case num1 < 0:
            console.log('el numero es negativo');
            break;
        default:
            console.log('el numero es cero');
    }
}

// 6 - Diseña un algoritmo que al introducir un número nos diga si es par o impar.

// if/else

function parImparIfElse (num1) {
    if (num1 % 2 === 0) {
        console.log('el numero es par');
    } else {
        console.log('el numero es impar');
    }
}

// ternario

function parImparTernario (num1) {
    (num1 % 2 === 0) ? console.log('el numero es par') : console.log('el numero es impar');
}


// switch

function parImparSwitch (num1) {
    switch (true) {
        case num1 % 2 === 0:
            console.log('el numero es par');
            break;
        default:
            console.log('el numero es impar');
    }
}