// let numbers: number[] = [1, 2, 3, 4];
// let names: string[] = ['Alice', 'Bob', 'Charlie'];


// generic type

let numbers: Array<number> = [1, 2, 3, 4];
let names: Array<string> = ['Alice', 'Bob', 'Charlie'];


console.log(numbers[0]); // Output: 1
console.log(names[1]); // Output: Bob

numbers[1]=20;
numbers.push(5);         // Adds to end
numbers.pop();           // Removes from end
numbers.unshift(0);      // Adds to start
numbers.shift();         // Removes from start

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (const name of names) {
    console.log(name);
}

names.forEach(name => console.log(name));
