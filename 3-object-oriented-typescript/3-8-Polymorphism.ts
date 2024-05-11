{
    // ====================
    // method write
    class Animal {
        public sound() { };
    }

    class Dog extends Animal {
        public sound(): void {
            console.log("Ghew...! Ghew...! Ghew...!");
        }
    }

    class Cow extends Animal {
        public sound(): void {
            console.log("Hamba...! Hamba...! Hamba...!");
        }
    }

    const mydog = new Dog();
    mydog.sound();
    // ====================
}