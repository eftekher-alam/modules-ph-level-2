// type alias for object 

// normal type alias
type nameType = string;

const myName: nameType = "Eftkher";

//  convention: custom type start with capital
type Student = {
    name: string;
    dep: string;
    address?: string;
}


const studnet1: Student = {
    name: "Shuvo",
    dep: "CSE",
    address: "Dhaka"
}

const studnet2: Student = {
    name: "Eftekher",
    dep: "CSE"
}

// type alias for function

type SumType = (num1: number, num2: number) => number;


const add: SumType = (num1, num2) => {
    return num1 + num2;
};