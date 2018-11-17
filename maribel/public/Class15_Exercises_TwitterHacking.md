1. Twitter no nos permite usar la consola porque han sobreescrito los métodos.... ¡Es hora de solucionarlo!
```javascript
function consoleLog(data) {
    var searchTextBox = document.querySelector("#doc > div.topbar.js-topbar > div > div > div > div > div");
    var p = document.createElement("p");
    var innerText = document.createTextNode(data);
    p.appendChild(innerText);
    searchTextBox.appendChild(p);
}
```

2. Saca en un Array los ultimos 100 usuarios que han twiteado sobre #javascript en [Twitter](https://twitter.com/hashtag/javascript?src=hash&lang=es) Notas:
- No necesitas estar logeado
- Necesitas primero resolver el ejercicio anterior para poder tener una consola disponible
```javascript
/*
WARNING: if you copy and paste this code at one time in the browser console,
it will cause an infinite loop and the browser to hang.

In order to avoid this and see get it to work, first copy and paste code in
this order: the declared functions, the "scrollPage" interval and, lastly,
the rest (this is, the while loop along with the "usernames" array declaration).
*/
var scrollPage = setInterval(function() {
    window.scrollTo(0, document.body.scrollHeight);
}, 4000);

var usernames = [];
while (true) {
    if (usernames.length < 100) {
        consoleLog("Getting usernames again");
        usernames = getUsernames();
    }
    else {
        consoleLog("We have ENOUGH usernames. BREAK");
        clearInterval(scrollPage);
        printUsernames();
        break;
    }
}

function printUsernames() {
    for(var user of usernames) {
        consoleLog(user);
    }
}

function getUsernames() {
    var results = [];
    var usernameNodes = document.getElementsByClassName("username u-dir u-textTruncate");

    var username = usernameNodes[0].textContent;
    for(var node of usernameNodes) {
        results.push(node.textContent);
    }

    return results.filter(isUnique);
}

function isUnique(value, index, self) {
    return self.indexOf(value) === index;
}
```
