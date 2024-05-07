{
    // 

    type TStudent = {
        firstName: string;
        lastName: string;
        email: string;
        id: number;
    }

    // type selectedProperty = "firstName" | "lastName" | "email" | "id";
    type studentProperty = keyof TStudent; //Equivalent to above line
    const selectedProperty: studentProperty = "firstName";


    // Example with object.
    const student1: TStudent = {
        firstName: 'John',
        lastName: "Deo",
        email: "john.deo@example.com",
        id: 25648
    }

    const getValueByPropNameGeneric = <TObj>(object: TObj, propName: keyof TObj) => {
        return object[propName];
    }

    getValueByPropNameGeneric<TStudent>(student1, "firstName");


    // 
}