let someData:unknown = "TypeScript Is Sexy"
let strLen = (someData as string).length;
console.log(strLen);

// for browser
// const usernameInput = (document.getElementById("username") as HTMLInputElement);
// usernameInput.value = "krishvsoni"

function getValue(id: string): unknown {
  return id === "valid" ? "Data found" : 404;
}



const result = getValue("valid") as string;
console.log(result);