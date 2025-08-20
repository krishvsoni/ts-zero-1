interface Flyer{
    fly(): void;
}

class Bird implements Flyer{
    name: string;


    constructor(name: string) {
        this.name = name;
    }

    fly(): void {
        console.log(`${this.name} is flying.`);
    }

}

const myBird = new Bird("Sparrow");
myBird.fly(); 