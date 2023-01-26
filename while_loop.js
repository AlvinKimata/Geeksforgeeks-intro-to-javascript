let i = 0;

while (i < 10){
    task(i);
    i++;
}

function task(i){
    setTimeout(function(){
        console.log(i);
    }, 2000 * i)
}