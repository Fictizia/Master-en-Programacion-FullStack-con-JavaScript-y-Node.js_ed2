![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed2.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed2.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed2.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Máster en Programación FullStack con JavaScript y Node.js
### JS, Node.js, Frontend, Backend, Firebase, Express, Patrones, HTML5_APIs, Asincronía, Websockets, Testing

## Clase 35


### Ejercicios

**1 -** Captura los emails del siguiente texto.
```
demo@demo.com, demo_demo@demo.com.ar, demo-demo12312@sub.dom.com.ar, demo@novalido, novalido>@demo.com, demo@novalido-.com, demo@-novalido.com
```

```javascript
const email = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
const emails = "demo@demo.com, demo_demo@demo.com.ar, demo-demo12312@sub.dom.com.ar, ,demo@novalido, novalido>@demo.com, demo@novalido-.com, demo@-novalido.com".match(email);
console.log(emails);
// ["demo@demo.com", "demo_demo@demo.com.ar", "demo-demo12312@sub.dom.com.ar"]
```


**2 -** Captura el DNI y NIE
- Formato DNI: 11223344-A (Guión opcional).

```
Válidos: 12345678-A, 11223344A,
No válidos: A11223344, 1234567K
```

- Formato para el NIE: X-1223344-A (Guión opcional).
    - El inicio puede ser X, Y o Z.

```
Válidos: X-1234567-A, X1234567A, Z1234567M
No válidos: X-1233456, 1234567
```

```javascript
const NIE = /([X-Z]{1})([-]?)(\d{7})([-]?)([A-Z]{1})/g;
const DNI = /(\d{8})([-]?)([A-Z]{1})/g;
const todosRegex = /(([X-Z]{1})([-]?)(\d{7})([-]?)([A-Z]{1}))|((\d{8})([-]?)([A-Z]{1}))/g;

const dniText = "Válidos: 12345678-A, 11223344A. No válidos: A11223344, 1234567K.";
const nieText = "Válidos: X-1234567-A, X1234567A, Z1234567M. No válidos: X-1233456, 1234567.";
const todosTexto = dniText + nieText;

const DNIs = dniText.match(DNI);
const NIEs = nieText.match(NIE);
const todos = todosTexto.match(todosRegex);

console.log("Solo DNIs:", DNIs); // ["12345678-A", "11223344A"]
console.log("Solo NIEs:", NIEs); // ["X-1234567-A", "X1234567A", "Z1234567M"]
console.log("TODOS:", todos); // ["12345678-A", "11223344A", "X-1234567-A", "X1234567A", "Z1234567M"]
```

**3 -** Comprobar la seguridad de una contraseña

De esta forma comprobaremos:
- Contraseñas que contengan al menos una letra mayúscula.
- Contraseñas que contengan al menos una letra minúscula.
- Contraseñas que contengan al menos un número
- Contraseñas que contengan al menos un caracter especial @#$%.
- Contraseñas cuya longitud sea como mínimo 6 caracteres.
- Contraseñas cuya longitud máxima sea 20 caracteres.

```javascript
const test = `Válidas:
Z%C2Uacgw_4weL@Q
QZ6UttU-&r4t%R+J
KK8a%K^9seQ$Qc8X
*Q#*9-CP%?JkXQSs
#1234abCD@

No válidas:
?mT6JmKpTu6m_=g=
=G4T!v-J2_6aS^EW
perrito
perrito123
Perrito1234`;

const exp = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/gm;
const validas = test.match(exp);
// ["Z%C2Uacgw_4weL@Q", "QZ6UttU-&r4t%R+J", "KK8a%K^9seQ$Qc8X", "*Q#*9-CP%?JkXQSs", "#1234abCD@"]
```