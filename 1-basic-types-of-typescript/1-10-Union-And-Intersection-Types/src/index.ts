// Union (or gate) type
type PlateNumber = string | number;

const car1: PlateNumber = "DK1287";
const car2: PlateNumber = 903456;


type FrontEndDeveloper = "Junior Front End Developer" | "Senior Front End Developer";
type BackEndDeveloper = "Junior Back End Developer" | "Senior Back End Developer";
type Developer = FrontEndDeveloper | BackEndDeveloper;

const employee: {
    position: Developer;
} = {
    position: "Senior Back End Developer"
}

const employee1: {
    position: Developer;
} = {
    position: "Junior Front End Developer"
}


// Intersection (and gate) type 
type Developer1 = {
    name: string,
    postion1: "Junior Front End Developer" | "Senior Front End Developer";
}
type Developer2 = {
    name: string,
    postion2: "Junior Back End Developer" | "Senior Back End Developer";
}

type DeveloperObj = Developer1 & Developer2;

//Here you have must use all the property 
const employee3: DeveloperObj = {
    name: "Eftekher",
    postion1: "Senior Front End Developer",
    postion2: "Junior Back End Developer"
}