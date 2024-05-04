// Ternary operator
const age = 20
const adult = 18 < age ? "adult" : "not adult";
console.log(adult); //adult

//Nullish Coalescing Operator
// It will make decision if the value is "null" or "undefined"
var undergradCGPA = 0.00;
const studentStatus = undergradCGPA ?? "Not Graduated";
console.log(studentStatus);


// Optional Chaining.
let student = {
    name: 'John',
    address: {
        city: 'New York'
    }
}

console.log(student?.address?.road); //there is no road 
