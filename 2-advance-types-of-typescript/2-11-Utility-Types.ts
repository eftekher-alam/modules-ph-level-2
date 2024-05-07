{
    // Utility types in TypeScript

    type TStudent = {
        name: string;
        id: number;
        email?: string;
        contactNo: string;
    }

    //---> Pick any(multiple or single) attribute with its type from an existing type obj and make a new type obj.
    type TStudent1 = Pick<TStudent, "name" | "id">;

    // equivalent to below 
    // type TStudent1 = {
    //     name: string;
    //     id: number;
    // }

    //---> Omit any(multiple or single) specific attribute and pick only these attribute that you need.
    type TContact = Omit<TStudent, "name" | "id">; //for contact we need email and contactNo.

    // equivalent to below
    // type TContact = {
    //     email?: string | undefined;
    //     contactNo: string;
    // }

    //--> Required, make all the attribute required and make new type obj with these attribute.
    type TRequiredStudent = Required<TStudent>;

    // equivalent to below
    // type TRequiredStudent = {
    //     name: string;
    //     id: number;
    //     email: string;
    //     contactNo: string;
    // }

    //--> Partial, make all the attribute optional and make new type obj with these attribute.
    type TOptionalStudent = Partial<TStudent>;

    // equivalent to below
    // type TOptionalStudent = {
    //     name?: string | undefined;
    //     id?: number | undefined;
    //     email?: string | undefined;
    //     contactNo?: string | undefined;
    // }

    //---> Readonly, make all the attribute readonly and make new type obj. If we create any object by the readonly type obj then the object will be readonly(no modification possible).
    type TReadonlyStudent = Readonly<TStudent>;

    // equivalent to below
    // type TReadonlyStudent = {
    //     readonly name: string;
    //     readonly id: number;
    //     readonly email?: string | undefined;
    //     readonly contactNo: string;
    // }



    //---> Record, it is used frequently, It will implicitly make the type object depend on the object property. If we add new property in the object the type obj also add the property to the type obj.

    type TPerson = Record<string, number | string> //unknown means all the type. Instead unknown we can use number or anything.

    //The above type will be created according to the below obj.
    const employee: TPerson = {
        name: "John Doe",
        age: 30
    };



    // 
}