// Normal function
function add(num1: number, num2: number): number { //last type is the return type
    return num1 + num2;
}

// Arrow function
const sub = (num1: number, num2: number): number => num1 + num2;


// Method
const student = {
    fname: "eftekher",
    lname: "shuvo",
    Greeting(msg: string): string {
        return `Hello ${this.fname} + ${this.lname}`;
    }
}