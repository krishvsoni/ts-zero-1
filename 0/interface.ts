interface User {
    id: number;
    name: string;
    age: number;
}


let users: User[]=[
     { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 }
]

function greetUser(user: User): void {
    console.log(`Hello, ${user.name}! You are ${user.age} years old.`);
}


if (users[0]) {
    greetUser(users[0]);
}
if (users[1]) {
    greetUser(users[1]);
}