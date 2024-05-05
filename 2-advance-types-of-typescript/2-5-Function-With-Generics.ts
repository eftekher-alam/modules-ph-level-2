{
    //
    const makeArrayByGeneric = <T1>(parameter: T1): T1[] => {
        return [parameter];
    }
    makeArrayByGeneric<number>(1);
    makeArrayByGeneric<string>("1");
    makeArrayByGeneric<{ name: string; id: number }>({ name: "Eftekher", id: 2006 });


    const makeTupleByGeneric = <T1, T2>(param1: T1, param2: T2): [T1, T2] => {
        return [param1, param2];
    }
    makeTupleByGeneric<string, number>("Eftekher", 24);

    interface IStudent {
        name: string;
        age: number;
        email: string;
    }

    //Another Example
    const student: IStudent = {
        name: "Alireza",
        age: 23,
        email: "alireza@gamil.com"
    }

    const addCourseToStudent = <T>(student: T) => {
        const course = "Next Level Web Dev";
        return {
            ...student,
            course
        }
    }

    addCourseToStudent<IStudent>(student);

    //
}