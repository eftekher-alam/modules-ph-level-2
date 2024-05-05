{

    // Generic for array
    type GenericArray<T> = Array<T>;

    // String array using generic type
    const students: GenericArray<string> = ["Mr. A", "Mr. B", "Mr. C"];
    // Normal string array
    const students2: string[] = ["Mr. A", "Mr. B", "Mr. C"];

    // Number array using generic type
    const studentIds: GenericArray<number> = [1, 2, 3, 4, 5];
    // Normal number array
    const studentIds2: number[] = [1, 2, 3, 4, 5];


    // Generic for object array
    type student = {
        name: string;
        id: number;
        dept: string;
        contact: string;
    }

    // Array with Generic Array
    const studentList: GenericArray<student> = [
        {
            name: 'John Doe',
            id: 101,
            dept: 'Computer Science',
            contact: 'john@doe.com'
        },
        {
            name: 'Jane Smith',
            id: 102,
            dept: 'Mathematics',
            contact: 'jane@smith.com'
        }
    ];

    //Normal array
    const studentList2: student[] = [
        {
            name: 'John Doe',
            id: 101,
            dept: 'Computer Science',
            contact: 'john@doe.com'
        },
        {
            name: 'Jane Smith',
            id: 102,
            dept: 'Mathematics',
            contact: 'jane@smith.com'
        }
    ];


    // Generic with tuple
    type GenericTuple<T1, T2> = [T1, T2];
    const coordinate: GenericTuple<number, number> = [3, 5];
    // console.log(coordinate);



}