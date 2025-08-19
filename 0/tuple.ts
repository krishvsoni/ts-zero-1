let person: [string, number];
person = ["Krish", 21];

console.log(person[0]); // Output: Krish
console.log(person[1]); // Output: 21

let coordinates: [number, number];
coordinates = [10, 20];

console.log(coordinates[0]); // Output: 10
console.log(coordinates[1]); // Output: 20


function getUser(): [string, number] {
    return ["Alice", 30];
}

getUser().forEach(value => console.log(value));