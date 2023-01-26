//map() method applies a function over every element and then returns the new array.
index = 0;
array = [ 1, 2, 3, 4, 5, 6 ];

square = x => Math.pow(x, 2);
squares = array.map(square);

console.log(array);
console.log(squares);