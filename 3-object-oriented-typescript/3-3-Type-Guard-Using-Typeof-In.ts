{
    // Type Guard by "typeof"

    const random = (param1: string | number, param2: string | number): string | number => {
        // return param1 + param2; //this line throw error, won't able to use + between number and string
        if (typeof param1 === 'number' && typeof param2 === "number")
            return param1 + param2; //here both are number
        else
            return param1.toString() + param2.toString();
    }

    // Type Guard by "in"
    type TAdmin = {
        name: string;
        role: "Admin"
    }

    type TNormalUser = {
        name: string;
    }

    const checkUser = (user: TAdmin | TNormalUser) => {
        // below line throw error, cause the user may not have "role" attribute
        // console.log(`User name is ${user.name} and role is ${user.role}`);
        if ("role" in user) {
            console.log(`User name is ${user.name} and role is ${user.role}`); 
        } else
            console.log(`User name is ${user.name}`);

    }

    // 
}