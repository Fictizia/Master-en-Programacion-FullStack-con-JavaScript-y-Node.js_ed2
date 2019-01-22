## Expresiones regulares (Regex)
**1 -** Captura los emails del siguiente texto.
```
demo@demo.com, demo_demo@demo.com.ar, demo-demo12312@sub.dom.com.ar, demo@novalido, novalido>@demo.com, demo@novalido-.com, demo@-novalido.com
```

```javascript
// Tu solución
```


**2 -** Captura el DNI y NIE
- Formato DNI: 11223344-A (Guión opcional).

```
Válidos: 12345678-A, 11223344A,
No válidos: A11223344, 1234567K
```
```javascrip
let regex = /^[\d]{8}-?[\w]$/;
```

- Formato para el NIE: X-1223344-A (Guión opcional).
    - El inicio puede ser X, Y o Z.

```
Válidos: X-1234567-A, X1234567A, Z1234567M
No válidos: X-1233456, 1234567
```

```javascript
let regex = /^x?y?z?-?[\d]{7}-?[\w]$/;
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
```
