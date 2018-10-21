// 1 - Diseña un algoritmo que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz.

function moneda() {
    const coin = Math.round(Math.random());
    console.info( (coin === 0) ? 'cara' : 'cruz' );
}

// 2 - Diseña un algoritmo que simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.

function cienTiradas () {
    const tiradas = 100;
    let suma = 0;
    let contador = 0;
    
    for (let i = 0; i <= tiradas; i++) {
        const dado1 = Math.round((Math.random() * (7 - 0)) + 0);
        const dado2 = Math.round((Math.random() * (7 - 0)) + 0);    
        suma = dado1 + dado2;
        if (suma === 10) contador++;
    }
    console.info(contador);
}

/* 3 - Nivel Medio ♠️ Diseña un script que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.

Características:
El usuario introduce tres números (día, mes, año) usando una función.
Validar la fecha. En caso de error incluir un mensaje informativo.
Después de validar, devolvemos la fecha en formato DD/MM/AAAA
Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)
*/

/*function validateNumber(str) {
    if (str === undefined && str === null && str === '' && isNaN(str) && str < 0 && str === -0) {
        return false;
    } else {
        return str;
    }
}

function fechaValida(dia, mes, anio) {
    dia = validateNumber(dia);
    mes = validateNumber(mes);
    anio = validateNumber(anio);
    
    if ((typeof dia === 'number') && (typeof mes === 'number') && (typeof anio === 'number')) {
        console.info('todo true')
    } else {
        console.warn('alguna false');
    }
}*/

// 4 - ¿Que fecha será dentro de 30 días?

function thirtyDays () {
    const today = new Date();
    today.setDate(today.getDate() + 30);
    return today.toLocaleString();
}

// 5 - ¿Cuantas horas han pasado desde que emepezó este master? y... ¿en días?

function passedDays() {
    const firstDay = new Date(2018, 09, 01);
    const today = new Date()
    const miliseconds = today.getTime() - firstDay.getTime();
    
    const seconds = parseInt(Math.floor(miliseconds / 1000));
    const minutes = parseInt(Math.floor(seconds / 60));
    const hours = parseInt(Math.floor(minutes / 60));
    const days = parseInt(Math.floor(hours / 24));
    
    console.info(`Han pasado, en horas ${hours} y en días ${days}`);
}

// 6 - ¿Cuantos milisengundos quedan para terminar el master? y... ¿en horas o días?

function finMaster () {
    const firstDay = new Date(2018, 09, 01);
    const finMaster = new Date(2019, 06, 01);
    const miliseconds = finMaster.getTime() - firstDay.getTime();
    
    const seconds = parseInt(Math.floor(miliseconds / 1000));
    const minutes = parseInt(Math.floor(seconds / 60));
    const hours = parseInt(Math.floor(minutes / 60));
    const days = parseInt(Math.floor(hours / 24));
    
    console.info(`Para terminar el master quedan: ${miliseconds} ${hours}, horas y ${days} días`);
}

// 7 - ¿Que fecha será dentro de un año y 10 horas más?

function dentroDeUnAnio () {
    const today = new Date();
    const hour = today.setHours(today.getHours() + 10);
    const newHour = new Date(hour);
    const nextYear = newHour.setFullYear(newHour.getFullYear() + 1, 9);
    console.info(new Date(nextYear));
}

// 8 - Imprimir por consola la fecha completa (formato texto) en koreano y japones.

function otroIdioma () {
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC', timeZoneName: 'short'}
    const today = new Date();
    console.info(today.toLocaleDateString('ko-KR', options));
    console.info(today.toLocaleDateString('ja-JP', options));
}
