function logger(constructor: Function) {
      console.log("Logging class:", constructor.name);

}


@logger
class MyClass {
  constructor() {
    console.log("MyClass instance created.");
  }
}

namespace MyNamespace {
  export function greet() {
    console.log("Hello from MyNamespace");
  }
}

MyNamespace.greet();
