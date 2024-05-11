{
    // =============
    abstract class Animal {
        abstract eat(): void;
        abstract sound(): void;
    }

    //You must have to implement all abstract
    class Cow extends Animal {
        eat(): void {
            console.log("Grass");
        }
        sound(): void {
            console.log("Moo");
        }
    }
    // =============

}