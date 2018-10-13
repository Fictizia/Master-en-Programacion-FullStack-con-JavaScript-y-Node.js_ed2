## Katas
Cat years, Dog years
```javascript
var humanYearsCatYearsDogYears = function(humanYears) {
  var catYears = 0;
  var dogYears = 0;
  
  if (humanYears >= 1) {
      catYears += 15;
      dogYears += 15;
  }
  
  if (humanYears >= 2) {
      catYears += 9;
      dogYears += 9;
  }
  
  if (humanYears > 2) {
    catYears += (humanYears - 2) * 4;
    dogYears += (humanYears - 2) * 5;
  }
  
  return [humanYears,catYears,dogYears];
}
```

Multiply
```javascript
function multiply(a, b){
  return a * b;
}

// Tests
describe("Solution", function(){
  it("Should check multiplication result", function(){
    Test.assertEquals(multiply(0, 0), 0);
    Test.assertEquals(multiply(0, 1), 0);
    Test.assertEquals(multiply(1, 0), 0);
    Test.assertEquals(multiply(1, -10), -10);
    Test.assertEquals(multiply(1, -0), 0);
  });
});
```

Even or Odd
```javascript
function even_or_odd(number) {
  var parity = "Odd";
  if (number % 2 == 0) {
    parity = "Even";
  }
  
  return parity;
}
```

String repeat
```javascript
function repeatStr (n, s) {
  var finalString = "";
  for (var i = 0; i < n; i++) {
    finalString += s;
  }
  return finalString;
}
```


Sum of positive
```javascript
function positiveSum(arr) {
  var sum = 0;
  arr.forEach(function(num) {
    if (num >= 0) {
      sum += num;
    }});
  
  return sum;
```

Get the Middle Character
```javascript
function getMiddle(s)
{
  var center = 0;
  var middleCharacter = "";
  if (lengthIsOdd(s.length)) {
    center = Math.floor(s.length / 2);
    middleCharacter = s[center];
  }
  else {
    center = s.length / 2,
    middleCharacter = s.substr(center - 1, 2);
  }
    
    return middleCharacter;
  }
  
  function lengthIsOdd(length) {
    return (length % 2 != 0);
  }
  ```
  
  Highest and Lowest
  ```javascript
  function highAndLow(numbers){
  var res = numbers.split(" ");
  
  var low = res[0];
  var high = res[0];
  res.forEach(function(num) {
    num = parseInt(num);
    if(num < low) {
      low = num;
    } 
    
    if (num > high) {
      high = num;
    }
  });
  
  return (high + " " + low);
}
```

Shortest Word
```javascript
function findShort(s){
  var words = s.split(" ");
  var shortestLength = words[0].length;
  words.forEach(function(word) {
    if(word.length < shortestLength) {
      shortestLength = word.length;
    }
  });
  
  return shortestLength;
}
```
