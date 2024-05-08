{
    // 

    class Person {
        firstName: string;
        lastName: string;
        age: number;
        constructor(fName: string, lName: string, age: number) {
            this.firstName = fName;
            this.lastName = lName;
            this.age = age;
        }

        getSleep(numberOfHours: number) {
            console.log(`Mr/Ms ${this.firstName} ${this.lastName} sleep ${numberOfHours} hours per day.`);

        }
    }

    class Student extends Person {
        occupation: string;
        constructor(occu: string, fName: string, lName: string, age: number) {
            super(fName, lName, age);
            this.occupation = occu;
        }

        read(numberOfHours: number) {
            console.log(`Mr/Ms ${this.firstName} ${this.lastName} read ${numberOfHours} hours per day`);

        }
    }

    const student1 = new Student("Student", "Eftekher", "Shuvo", 24);
    student1.read(6);
    student1.getSleep(8);

    // 
}