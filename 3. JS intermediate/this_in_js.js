function doSomething(a, b){
    //Adds a propone property to the window object.
    this.propone = 'test value';
}

//Function invocation.
doSomething();
document.write(window.propone);