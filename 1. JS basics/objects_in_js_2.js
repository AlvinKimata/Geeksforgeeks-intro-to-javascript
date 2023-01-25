let person = {
    gender: "male"
}

var person1 = Object.create(person);
person1.name = "Adam";
person1.age = 45;
person1.nationality = "Austrlaian";

for (let key in person1){
    console.log(key);
}

//Deleting properties
delete person1.age;

console.log(person1.age);