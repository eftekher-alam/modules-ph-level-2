// Unknown type
// Let's say, what type of value is coming you don't know. You have to decide it later and take action

const calculate = (value: unknown): number => {
    if (typeof value === "number") {
        console.log("The value type is ", typeof value);
        return value * value;
    }
    else if (typeof value === "string") {
        console.log("The value type is ", typeof value);
        return parseInt(value) * parseInt(value);
    }
    else
        return 0;
}

console.log(calculate("12"));


//never type
//If you know that the function never return anything then you can use this type as return type.
const greeting = (): never => {
    console.log('Hello world');
}

greeting();

