

function coincidencias(str, letra){
    let coinc = 0
    let c = "b"

    for (let i = 0; i < str.length; i++) {
        if (str[i] == letra) {
            coinc += 1;
        }
    }

    return coinc;
}
