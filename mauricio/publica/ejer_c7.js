/*1 - Nivel Medio ♠️ Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.

Características:

La palabra clave es "Fictizia mola mucho"
Solo existen tres intentos
Si se pasan los tres intentos. Se despliega un mensaje informativo.*/


function autorizacionFor() {
    
    let intentos = 0;
    const password = "Fictizia mola mucho";
    
    for (let i = 0; intentos <= 3; i++) {
      let input = prompt('escribela contraseña');
        if (input === '' || input !== password) {
            intentos++;
            if (intentos === 3) {
                console.warn('superados 3 intentos');
                break;
            }
        } else {
            console.info('yuhu!!');
            break;
        }
    }        
}

function autorizacionWhile() {
    let intentos = 0;
    const password = "Fictizia mola mucho";
    
    while(intentos <= 3) {
        let input = prompt('escribela contraseña');
        if (input === '' || input !== password) {
            intentos++;
            if (intentos === 3) {
                console.warn('superados 3 intentos');
                break;
            }
        } else {
            console.info('yuhu!!');
            break;
        }
    }
}

function autorizacionDoWhile() {
    let intentos = 0;
    const password = "Fictizia mola mucho";
    
    do {
        let input = prompt('escribela contraseña');
        if (input === '' || input !== password) {
            intentos++;
            if (intentos === 3) {
                console.warn('superados 3 intentos');
                break;
            }
        } else {
            console.info('yuhu!!');
            break;
        }
    } while (intentos <= 3)
}

// 2 - Diseña un algoritmo que imprima los numeros del 1 al 100.

function unoACienFor (){
    const cien = 100;
    for (let i = 1; i <= cien; i++) {
        console.info(i);
    }
}

function unoACienWhile (){
    const cien = 100;
    let i = 1;
    while(i <= cien) {
        console.info(i);
        i++;
    }
}

function unoACienDoWhile() {
    const cien = 100;
    let i = 1;
    do {
        console.info(i);
        i++;
    } while (i <= cien);
}

// 3 - Diseña un algoritmo que imprima los numeros del 100 al 0.

function cienACeroFor (){
    for (let i = 100; i >= 0; i--) {
        console.info(i);
    }
}

function cienACeroWhile (){
    let i = 100;
    while(i >= 0) {
        console.info(i);
        i--;
    }
}

function cienACeroDoWhile() {
    let i = 100;
    do {
        console.info(i);
        i--;
    } while (i >= 0);
}

// 4 - Diseña un algoritmo que imprima los numeros pares entre 0 y 100.

function paresFor() {
    const cien = 100;
    for (let i = 0; i <= cien; i++) {
        if (i % 2 === 0) console.log(i)
    }
}

function paresWhile() {
    const cien = 100;
    let i = 0;
    
    while (i <= cien) {
        if (i % 2 === 0) console.log(i)
        i++;
    }
}

function paresDoWhile() {
    const cien = 100;
    let i = 0;
    
    do {
        if (i % 2 === 0) console.log(i)
        i++;
    } while (i <= cien);
}

// 5 - Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números.

function imparesUsuarioFor (num) {
    const siguientes50 = 50;
    const limite = num + siguientes50;
    for(let i = num; i <= limite; i++) {
        if (i % 2 !== 0) console.log(i);
    }
}

function imparesUsuarioWhile (num) {
    const siguientes50 = 50;
    const limite = num + siguientes50;
    
    let i = num;
    while (i <= limite) {
        if (i % 2 !== 0) console.log(i);
        i++;
    }
    
}

function imparesUsuarioDoWhile (num) {
    const siguientes50 = 50;
    const limite = num + siguientes50;
    
    let i = num;
    
    do {
        if (i % 2 !== 0) console.log(i);
        i++;
    } while (i <= limite);
}

// 6 - Diseña un algoritmo que imprima la suma de los 50 primeros numeros pares y el total de números impares partiendo de un número dado por el usuario

function sumaNumerosParesFor(num) {
    const siguientes50 = 50;
    const limite = num + siguientes50;
    let sumaPares = 0;
    let numerosImpares = 0;
    
    for(let i = num; i <= limite; i++) {
        (i % 2 === 0) ? sumaPares += i : numerosImpares++;
    }
    console.log(sumaPares + numerosImpares);
}

function sumaNumerosParesWhile(num) {
    const siguientes50 = 50;
    const limite = num + siguientes50;
    let sumaPares = 0;
    let numerosImpares = 0;
    
    let i = num;
    
    while(i <= limite) {
        (i % 2 === 0) ? sumaPares += i : numerosImpares++;
        i++;
    }
    console.log(sumaPares + numerosImpares);
}

function sumaNumerosParesDoWhile(num) {
    const siguientes50 = 50;
    const limite = num + siguientes50;
    let sumaPares = 0;
    let numerosImpares = 0;
    
    let i = num;
    
    do {
        (i % 2 === 0) ? sumaPares += i : numerosImpares++; 
        i++;
    } while (i <= limite);
    
    console.log(sumaPares + numerosImpares);
}

/*7 - Nivel Avanzado ♦️ Diseña un algoritmo introducido un numero y pasarlo a número romanos.

Esperamos que el número sea menor de 50*/