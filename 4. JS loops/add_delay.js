//Add a delay function in a loop.
for (let i = 0; i < 10; i++){
    task(i);
}

function task(i){
    setTimeout(function() {
        //Add tasks to do.
        console.log(i);

    }, 2000 * i);
}