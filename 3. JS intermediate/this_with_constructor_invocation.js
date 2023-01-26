/*Constructor invocation is performed when a new keyword
is followed by a function name, and a set of opening and
closing parentheses(with or without arguments). */

let people  = function(name, age){
    this.name = name;
    this.age = age;

    this.displayInfo = function(){
        document.write(this.name + " is " + this.age + " years old ");
    }
}

let person1 = new people('John', 21)

person1.displayInfo();