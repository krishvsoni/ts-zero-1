interface Employee{
    readonly id: number;
    name: string;
    department: string;
    email?: string;
    readonly hireDate: Date;
}

const employee: Employee = {
  id: 1,
  name: "Krish",
  department: "Board",
  hireDate: new Date("2025-08-20")
};



console.log(employee);



