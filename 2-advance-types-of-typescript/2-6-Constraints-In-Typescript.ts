{
    // 
    interface IStudent {
        name: string;
        age: number;
        email: string;
    }

    const student: IStudent = {
        name: "Alireza",
        age: 23,
        email: "alireza@gamil.com"
    }

    //here, setting that the argument object must have "name" and "id" property
    const addCourseToStudent = <T extends { name: string; id: number }>(student: T) => {
        const course = "Next Level Web Dev";
        return {
            ...student,
            course
        }
    }

    //Here, it will show error, because IStudent or student doesn't have "name" or "id"
    addCourseToStudent<IStudent>(student);
    // 
}