/*objects are quite different from JavaScript’s primitive data types 
(Number, String, Boolean, null, undefined, and symbol) in the sense that
 these primitive data types all store a single value each (depending on their types).*/

let school = {
    name: "Vivekandi school",
    location: "Delhi",
    establised: "1971",
    20: 1000,
    displayInfo: function(){
        console.log(`${school.name} was established in
         ${school.establised} at ${school.location}`)

        console.log(`The value of the key 20 is ${school['20']}`);
    }
}

school.displayInfo();  



   // hasOwnProperty code in js
   const object1 = new Object();
   object1.property1 = 42;
    
   console.log(object1.hasOwnProperty('property1')); // true