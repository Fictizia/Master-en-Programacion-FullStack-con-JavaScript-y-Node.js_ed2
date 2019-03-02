### 1 - Captura los emails del siguiente texto

```javascript
([\w]+[\-]*[0-9]*)+@(([\w]{3,})+[\.])+([a-z]{2,3})
```

### 2 - Captura el DNI y NIE
#### Formato DNI

```javascript
^([1-8]{8})+-?[A-Z]{1}
```

#### Formato NIE

```javascript
^[XYZ]-?([0-9]{7})+-?[A-Z]$
```

## 3 - Comprobar la seguridad de una contraseña