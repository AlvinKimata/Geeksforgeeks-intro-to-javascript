function doSomething(){
    //Enable strict mode.
    'use strict';
    //logs undefined.
    document.write(this + '<br>')

    function innerFunction(){
        document.write(this)
    }

    innerFunction();
}

//Function invocation.
doSomething();