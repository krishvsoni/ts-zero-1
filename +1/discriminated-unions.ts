interface dog{
    kind: "dog";
    bark: () => void;
}

interface cat{
    kind: "cat";
    meow: () => void;
}

type pet = dog | cat;

function speak(animal: pet) {
    switch(animal.kind){
        case "dog":
            animal.bark();
            break;
        case "cat":
            animal.meow();
            break;
    }
}

speak({ kind: "dog", bark: () => console.log("Woof!") });
speak({ kind: "cat", meow: () => console.log("Meow!") });