{

    interface basicStudent {
        firstName: string;
        lastName: string;
    }

    // extending all the features of basicStudent interface
    interface AdvanceStudent extends basicStudent {
        age: number;
        address: string;
    }

    const newStudent: AdvanceStudent = {
        firstName: "eftekher",
        lastName: "rezaei",
        age: 19,
        address: "Dhaka, Bangladesh"
    }

    // console.log(newStudent);


    // interface extends from type
    type person = {
        name: string;
        age: number;
    }

    interface advancePerson extends person {
        occupation: string;
    }


    // interface for array
    interface StudentArray {
        //here index is number(universal truth), and the array can contain string or number
        [index: number]: string | number;
    }

    const myArray: StudentArray = ["Eftekher", 24, "Dhaka"]

    // console.log(myArray);


    // interface for function
    interface PrintDetails {
        (name: string, age?: number): void;
    }

    const myPrintFunction: PrintDetails = (a, b) => {
        console.log(`My name is ${a} and I'm ${b} years old.`);
    }
    // myPrintFunction("eftekher", 20) //here, age is optional


    // Interface for object with function and array

    interface NormalHuman {
        firstName: string;
        lastName: string;
        skills: string[];
        speak(msg: string): void;
    }

    const human: NormalHuman = {
        firstName: "John",
        lastName: "Doe",
        skills: ["C++", "C#"],
        speak(msg) {
            console.log("Hello,", msg);
        },
    }

    human.speak("How are you?");

}