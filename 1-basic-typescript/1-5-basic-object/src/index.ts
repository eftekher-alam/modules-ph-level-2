const person: {
    fname: string;
    mname?: string; //  ? means that this property is optional. 
    lname: string;
    company: "programming hero"; // literal type, cause the value become type
} = {
    fname: "John",
    lname: "Doe",
    company: "programming hero" // you can only put "programming hero"
}