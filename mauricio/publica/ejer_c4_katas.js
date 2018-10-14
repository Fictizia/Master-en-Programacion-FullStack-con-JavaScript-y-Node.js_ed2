// Cat years, Dog years


// Find the bug!

function multiply(a, b){
  return a * b;
}
// Even or odd?

function even_or_odd(number) {
  if (typeof number === 'number') {
    return (number % 2 === 0) ? 'Even' : 'Odd';
  }
}
// String repeat

function repeatStr (n, s) {
  let multiplicate = '';
  for (let i = 0; i < n; i++) {
    multiplicate += s;
  }
  return multiplicate;
}

// Sum of possitive

function positiveSum(arr) {
  let positives = arr.filter((elm) => elm >= 0).reduce((acc, val) => acc + val);
  console.log(positives);
}

// Get the Middle Character

function getMiddle(s) {
  let long = 0;
  if (typeof s === 'string') {
    long = s.length;
    if (long % 2 === 0) {
      return s.substring((long/2) - 1, (long/2) + 1);
    } else {
      return s.substr(Math.floor(long / 2), 1)
    }
  }
}

// Highest and Lowest

function highAndLow(numbers){
  let array = numbers.split(' ')
  let newArray = array.map(elm => +elm);
  let min = Math.min(...newArray);
  let max = Math.max(...newArray);
  return `${String(max)} ${String(min)}`;
}

// Shortest word
