let globalVar = "This is a global variable"

function fun(){
    let localVar = "This is the local variable"

    console.log(globalVar);
    console.log(localVar);

}

function another_fun(){
    let localVar = "This is a local variable";
}

fun();

console.log(globalVar);
console.log(localVar);