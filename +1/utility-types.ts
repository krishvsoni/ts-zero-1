/**
 Partial<T>: Makes all properties optional.

Required<T>: Makes all properties required.

Readonly<T>: Makes all properties read-only.

Record<K, T>: Creates a new object type with keys of type K and values of type T.

Pick<T, K>: Selects a subset of properties from type T.

Omit<T, K>: Removes specific properties from type T.

Exclude<T, U>: Removes types from T that are assignable to U.

Extract<T, U>: Extracts types from T that are assignable to U.

NonNullable<T>: Removes null and undefined from type T.

ReturnType<T>: Extracts the return type of a function T.
 * 
 */


interface Person{
    name: string;
    age: number;
    isActive: boolean;
}

const partialPerson: Partial<Person> = {};
const updatePerson = (person: Person, updates: Partial<Person>) => {
 return {...person, ...updates};
}
const person: Person = { name: "Alice", age: 30, isActive: true };
const updatedPerson = updatePerson(person, { age: 31 });
console.log(updatedPerson);



// type RequiredPerson = Required<Person>;

// const person: RequiredPerson = { name: "Alice", age: 30, isActive: true };



// type ReadonlyPerson = Readonly<Person>;

// const person: ReadonlyPerson = { name: "Alice", age: 30, isActive: true };
// person.age = 31


type Scores = Record<string, number>;

const studentScores: Scores = {
  Alice: 85,
  Bob: 92,
  Charlie: 78
};
console.log(studentScores);

type Direction = "up" | "down" | "left" | "right";

type Movement = Record<Direction, string>;

const move: Movement = {
  up: "Move up",
  down: "Move down",
  left: "Move left",
  right: "Move right",
};

console.log(move); 
