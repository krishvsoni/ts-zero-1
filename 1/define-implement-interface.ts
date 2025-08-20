interface Person{
    name: string;
    age: number;
    greet(): string;
}

class Employee implements Person{
    name: string;
    age: number;
    jobtitle: string;

    constructor(name: string, age: number, jobtitle: string) {
        this.name = name;
        this.age = age;
        this.jobtitle = jobtitle;
    }

    greet(): string {
        return `Hello, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.jobtitle}.`;
    }
}

const employee = new Employee("Krish", 20, "Engineer");
console.log(employee.greet());