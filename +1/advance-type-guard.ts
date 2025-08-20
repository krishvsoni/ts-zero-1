type Dog = {type:"dog"; breed:string};
type Cat = {type:"cat"; color:string};
type Fish = {type:"fish";swimSpeed: number};
type Animal = Dog | Cat | Fish;


function isDog(animal:Animal): animal is Dog{
    return animal.type === "dog";
}

function isCat(animal:Animal):animal is Cat{
    return animal.type === "cat";
}

function isFish(animal:Animal):animal is Fish{
    return animal.type === "fish";
}


function isArray(value: any): value is Array<any>{
    return value instanceof Array;
}


function isString(value: any): value is string {
    return typeof value === "string";
}   