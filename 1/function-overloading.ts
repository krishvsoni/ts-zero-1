function add(number1: number, number2: number): number;
function add(a:string, b:string): string;

function add(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b; 
  }
  if (typeof a === "string" && typeof b === "string") {
    return a + b; 
  }
  throw new Error("Invalid input types");
}

console.log(add(5, 10)); 
 console.log(add("Hello, ", "World!")); 