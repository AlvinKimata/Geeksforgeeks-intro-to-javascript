//The forEach() method calls the provided function once for
//every array element in the order.

index = 0;
array = [ 1, 2, 3, 4, 5, 6 ];

array.forEach(myFunction);

function myFunction(item, index){
    console.log(item, index);
}