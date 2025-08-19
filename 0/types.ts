let isDone = false;

let age:number = 25;
let firstName:string = "Krish";

let scores:number[] = [90, 85, 88];
let fruits:Array<string> = ["Apple", "Banana", "Cherry"];


enum color{
    Red,
    Green,
    Blue
}
let favouriteColor:color = color.Red;

let randomValue: any = "Hi Baby";
randomValue = 100;

let value:unknown = "test";

let u: undefined = undefined;
let n: null = null;

function logMessage(message:string):void {
    console.log(message);
}

function throwError(message:string):never{
    throw new Error(message);
}

let user:{name:string, age:number}={
    name: "Charlie",
    age: 28,
}

export { isDone, age, firstName, scores, fruits, color, favouriteColor, randomValue, value, u, n, logMessage, throwError, user };