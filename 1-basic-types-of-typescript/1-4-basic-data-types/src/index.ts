let price: number = 34.5;
let userName: string = "John Doe";
let isSubscribed: boolean = false;
let onlyNull: null = null;
let undefinedVar: undefined = undefined;

let arr1: number[] = [1, 2, 3];
let friends: string[] = ["Tom", "Jerry"];

// tuple can store 2 or 3 value
let custInfo1: [string, number] = ["John", 36];
let custInfo2: [string, number, string] = ["John", 36, "Dhaka, Bangladesh"];

// Destructuring tuple
let ageTuple: [custName: string, age: number] = ["Doe", 10];
let [custName, age] = ageTuple;

console.log(custName, age);
