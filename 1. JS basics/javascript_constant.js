//Can be used to describe a variable which contains the block scope.
const x = 22;
{
    const x = 90;
    console.log(x);

    {
        const x = 77;
        console.log(x);
    }

    {const x = 45;
    console.log(x);
    }
}

//Code below throws out an error.

// x = 13;

// x += 1;

// console.log(x)


const arr1 = ["pankaj", "sumit", "chandan", "ajay"];

console.log(arr1.toString())

arr1[2] = "Naryan";
console.log(arr1.toString())
