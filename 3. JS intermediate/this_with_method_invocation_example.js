let add = {
    num: 0,
    calc: function(){
        //Logs the add object.
        document.write(this + ' ')
        this.num
        += 1;

    return this.num;
    }
};

//Logs 1.
document.write(add.calc() + '<br>');

//Logs 2.
document.write(add.calc());