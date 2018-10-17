for(let i = 1; i <= 3; i++){
	if(window.prompt() === "Fictizia mola mucho"){
		alert("Acceso concedido!");
		break;
	} else {
		if(i < 3){
			alert(`Acceso denegado. Te quedan ${3 - i}`);	
		} else {
			alert(`Has sobrepasado el número de intentos. Pongasé en contacto con un administrador.`);
		}
	}
}