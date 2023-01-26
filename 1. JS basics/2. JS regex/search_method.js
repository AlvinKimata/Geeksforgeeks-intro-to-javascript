//The search() method is used to search for a match
//and returns the position of the match.
function myFunction(){
    //Input string.
    var str = 'Visit geeksforGeeks!';

    //Search string with modifier i.(case insensitive)
    var n = str.search(/GeeksforGeeks/i);

    console.log(n);

    //Search string without modifier.
    var n = str.search(/GeeksforGeeks/);

    console.log(n);
}

myFunction();