type Person ={
    name: string;
    age: number;
    isActive: boolean;

};

type ReadOnlyPerson={
    readonly [K in keyof Person]: Person[K];
}


const person: ReadOnlyPerson = {
  name: "Krish ",
  age: 20,
  isActive: true,
};

console.log(` ${person.name}, ${person.age}, ${person.isActive}`);