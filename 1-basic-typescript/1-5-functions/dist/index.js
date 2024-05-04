"use strict";
// Normal function
function add(num1, num2) {
    return num1 + num2;
}
// Arrow function
const sub = (num1, num2) => num1 + num2;
// Method
const student = {
    fname: "eftekher",
    lname: "shuvo",
    Greeting(msg) {
        return `Hello ${this.fname} + ${this.lname}`;
    }
};
