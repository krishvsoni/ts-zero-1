interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    jobTitle: string;
    department: string;
}


type EmployeePerson = Person & Employee;

const employee1: EmployeePerson = {
  name: "Krish",
  age: 20,
  jobTitle: "Software Engineer",
  department: "Tech Team"
};

console.log(`Name: ${employee1.name}`);
console.log(`Age: ${employee1.age}`);
console.log(`Job Title: ${employee1.jobTitle}`);
console.log(`Department: ${employee1.department}`);