let person = {
    name: "John",
    age: 31,
    logInfo: function(){
        document.write(this.name + " is " + this.age + " years old");
    }
}

person.logInfo()