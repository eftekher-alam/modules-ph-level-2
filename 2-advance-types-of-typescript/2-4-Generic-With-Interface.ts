{
    //

    type TLaptop = {
        brand: string;
        processorName: string;
        displaySize: number;
        battery: string;
    }

    type TDesktop = {
        brand: string;
        processorName: string;
        displaySize: number;
        powerSupply: string;
    }
    type TYamahaBike = {
        model: string,
        color: string,
        price: number
    }

    interface IDeveloper<Tpc, TBike = null> { //bike type is optional
        name: string;
        age: number;
        skills: string[];
        pc: Tpc;
        bike?: TBike;  //bike is optional
    }

    const employee1: IDeveloper<TLaptop> = {
        name: "Eftekher",
        age: 25,
        skills: ["JavaScript", "TypeScript", "React"],
        pc: {
            brand: "HP",
            processorName: "Intel Core i5",
            displaySize: 14,
            battery: "2500 mAh"
        }
    }

    const employee2: IDeveloper<TDesktop, TYamahaBike> = {
        name: "Shuvo",
        age: 25,
        skills: ["C#", "Java", "PHP"],
        pc: {
            brand: "Custom",
            processorName: "Intel Core i7",
            displaySize: 22,
            powerSupply: "450w"
        },
        bike: {
            model: "MTB 360R",
            color: "Red",
            price: 8999.99
        }
    }


    //
}