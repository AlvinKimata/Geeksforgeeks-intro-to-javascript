array = [ 1, 2, 3, 4, 5, 6 ];

const helperSum = (acc, curr) => acc + curr
sum = array.reduce(helperSum, 0);

console.log(array);
console.log(sum);