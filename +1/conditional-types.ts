type IsNumber<T> = T extends number ? true : false;
type Test1 = IsNumber<number>;  
type Test2 = IsNumber<string>;  

function isNumber<T>(value: T): boolean {
	return typeof value === "number";
}

console.log(isNumber(123));    
console.log(isNumber("abc"));  