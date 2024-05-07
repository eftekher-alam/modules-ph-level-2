{
    // Changing type using map 

    // Mapped Types
    type TOldType = {
        height: number;
        width: number;
    }

    //by the map type we can loop through any type
    type TNewType = {
        [ky in keyof TOldType]: string;
    }

    // Lookup Types
    const obj1: TOldType["height"] = 1232;
    // "TOldType["height"]" this part is lookup, it returns only the type from the type obj.

    // 
}