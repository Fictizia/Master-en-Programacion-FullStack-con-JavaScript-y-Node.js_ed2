# Kata Stats:

## 1- [Cats years, Dog years](https://www.codewars.com/kata/cat-years-dog-years)

```javascript
function yearsComparation(years){

	let humanYears = years;
	let catYears = 0;
	let dogYears = 0;

	if(years >= 1){
		catYears += 15;
		dogYears += 15;
	}

	if(years >= 2){
		catYears += 9;
		dogYears += 9;
	}

	if(years > 2){
		catYears += (years - 2) * 4;
		dogYears += (years - 2) * 5;
	}

	console.group("yearsGroup");
		console.log(`Años humanos: ${humanYears}`);
		console.log(`Años gatunos: ${catYears}`);
		console.log(`Años perrunos: ${dogYears}`);
	console.groupEnd("yearsGroup");
}
```