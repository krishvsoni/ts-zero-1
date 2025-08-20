// 1. **Literal Types**: String, Number, and Boolean

type Status = "success" | "error" | "pending"; 

function showStatus(status: Status): void {
  if (status === "success") {
    console.log("Operation was successful.");
  } else if (status === "error") {
    console.log("There was an error.");
  } else {
    console.log("Operation is pending.");
  }
}

showStatus("success"); 
showStatus("error");   
// showStatus("completed"); // Error: Argument of type '"completed"' is not assignable to parameter of type 'Status'.


type Direction = 1 | 2 | 3 | 4; 

function move(direction: Direction): void {
  switch (direction) {
    case 1:
      console.log("Moving North");
      break;
    case 2:
      console.log("Moving East");
      break;
    case 3:
      console.log("Moving South");
      break;
    case 4:
      console.log("Moving West");
      break;
  }
}

move(1); 
move(3); 
// move(5); // Error: Argument of type '5' is not assignable to parameter of type 'Direction'.


type Toggle = true | false;

function toggleSwitch(state: Toggle): void {
  if (state) {
    console.log("The switch is ON");
  } else {
    console.log("The switch is OFF");
  }
}

toggleSwitch(true);  
toggleSwitch(false); 
// toggleSwitch("on"); // Error: Argument of type '"on"' is not assignable to parameter of type 'Toggle'.


type Animal = "dog" | "cat" | "bird"; 

function petSound(animal: Animal): void {
  if (animal === "dog") {
    console.log("Woof!");
  } else if (animal === "cat") {
    console.log("Meow!");
  } else {
    console.log("Tweet!");
  }
}

petSound("dog");   
petSound("cat");   
// petSound("fish"); // Error: Argument of type '"fish"' is not assignable to parameter of type 'Animal'.

type NumberOrString = number | string; 

function printValue(value: NumberOrString): void {
  console.log(value);
}

printValue(100);     
printValue("Hello"); 
// printValue(true);  // Error: Argument of type 'true' is not assignable to parameter of type 'NumberOrString'.


interface Person {
  name: string;
  age: number;
}

interface Employee {
  jobTitle: string;
  department: string;
}

type EmployeePerson = Person & Employee;

const employee1: EmployeePerson = {
  name: "Alice",
  age: 30,
  jobTitle: "Engineer",
  department: "Development"
};

console.log(employee1);


interface User {
  name: string;
  role: "admin" | "editor" | "viewer"; 
}

const user1: User = {
  name: "Alice",
  role: "admin"  
};

const user2: User = {
  name: "Bob",
  role: "moderator"  // Error: Type '"moderator"' is not assignable to type '"admin" | "editor" | "viewer"'.
};


interface Animal {
  species: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): void;
}

interface Cat {
  color: string;
  meow(): void;
}

type DogWithAnimal = Animal & Dog;

const dog: DogWithAnimal = {
  species: "Dog",
  age: 3,
  breed: "Golden Retriever",
  bark() {
    console.log("Woof!");
  }
};

type Pet = Dog | Cat;

const pet1: Pet = {
  species: "Cat",
  age: 2,
  color: "Gray",
  meow() {
    console.log("Meow!");
  }
};

const pet2: Pet = {
  species: "Dog",
  age: 4,
  breed: "Labrador",
  bark() {
    console.log("Woof!");
  }
};

console.log(dog);
console.log(pet1);
console.log(pet2);


function getUserRole(isAdmin: boolean): "admin" | "guest" {
  return isAdmin ? "admin" : "guest";
}

const role1 = getUserRole(true);  
const role2 = getUserRole(false); 


type TaskStatus = "pending" | "in-progress" | "completed";

let currentStatus: TaskStatus = "pending";  
currentStatus = "in-progress";               
// currentStatus = "finished";               // Error: Type '"finished"' is not assignable to type 'TaskStatus'.


type Color = "red" | "green" | "blue";
type Shape = "circle" | "square";

type ColoredShape = {
  color: Color;
  shape: Shape;
};

const item: ColoredShape = {
  color: "red",   
  shape: "circle" 
};

const invalidItem: ColoredShape = {
  color: "yellow", // Error: Type '"yellow"' is not assignable to type 'Color'.
  shape: "circle"
};

