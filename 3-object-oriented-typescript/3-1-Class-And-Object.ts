{
    // OOP 
    class Animal {
        // constructor(name: string, color: string, height: number, length: number) {
        //     this.name = name;
        //     this.color = color;
        //     this.height = height;
        //     this.length = length;
        // }

        // name: string;
        // color: string;
        // height: number;
        // length: number;

        //Alternative way..
        constructor(public name: string, public color: string, public height: number, public length: number) {
        }

        sound(sound: string) {
            console.log(`The ${this.name} sound like ${sound}`);
        }
    }

    const dog = new Animal("Bangladeshi dog", "Black", 1, 2);

    dog.sound("Ghew... Ghew... Ghew...");
    // 
}