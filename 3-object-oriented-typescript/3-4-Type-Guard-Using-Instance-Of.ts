{
    // Type guard by instanceof
    class Animal {
        constructor(public name: string, public color: string, public height: number, public length: number) {
        }

        makeSound(sound: string) {
            console.log(`The ${this.name} sound like ${sound}`);
        }
    }

    class Dog extends Animal {
        constructor(name: string, color: string, height: number, length: number) {
            super(name, color, height, length);
        }

        makeBark() {
            console.log("Dog is Barking..");

        }
    }

    class Cow extends Animal {
        constructor(name: string, color: string, height: number, length: number) {
            super(name, color, height, length);
        }

        makeHammba() {
            console.log("Cow is Hammbaing..");
        }
    }

    // simple guard
    // const listen = (animal: Cow | Dog) => {
    //     if (animal instanceof Cow)
    //         animal.makeHammba();
    //     else
    //         animal.makeBark();
    // }

    //advance guard
    const isCow = (animal: Animal): animal is Cow => {
        return animal instanceof Cow; //return type set like above line
    }
    const listen = (animal: Cow | Dog) => {
        if (isCow(animal))
            animal.makeHammba();
        else
            animal.makeBark();
    }




    // 
}