# Ejercicio clase 25

## Nasa Rover Challenge:

```javascript
	function newOrientation(newOrientation, value){
		newOrientation += value;

		if(newOrientation < 0){ newOrientation += 360; }

		return newOrientation;
	}

	function degToCardinal(value){
		switch(value%360){
			case 0:
				return "N";
			case 90:
				return "E";
			case 180:
				return "S";
			case 270:
				return "W";
		}
	}

	function cardinalToDeg(value){
		switch(value){
			case "N":
				return 0;
			case "E":
				return 90;
			case "S":
				return 180;
			case "W":
				return 270;
		}
	}

	function movement(size, orientation, position){
		let error = 0;

		switch(orientation%360){
			case 0:
				(position[1] + 1 <= size) ? position[1]++ : error = 1;
				break;
			case 180:
				(position[1] - 1 >= 0) ? position[1]-- : error = 1;
				break;
			case 90:
				(position[0] + 1 <= size) ? position[0]++ : error = 1;
				break;
			case 270:
				(position[0] - 1 >= 0) ? position[0]-- : error = 1;
				break;
		}

		if(error){ console.log("Acción imposible de realizar. El movimiento sobrepasa los parametros asignados.") }

		return position;
	}

	function setup(size, firstPosition, action){
		let position = [parseInt(firstPosition.split(" ")[0]), parseInt(firstPosition.split(" ")[1])];
		let orientation = cardinalToDeg(firstPosition.split(" ")[2]);

		action.forEach(function(command){
			switch(command){
				case "L":
					orientation = newOrientation(orientation, 90);
					break;
				case "R":
					orientation = newOrientation(orientation, -90);
					break;
				case "M":
					position = movement(size, orientation, position);
					break;
			}

			console.log(command, position[0], position[1], degToCardinal(orientation));
		});
	}
```