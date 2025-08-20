function identify<T>(value: T): T {
  return value;
}

const num = identify<number>(18);
const str = identify<string>('Kohli Goes Down The Ground, Kohli Goes Out Of The Ground');


console.log(num);   
console.log(str);   


interface Container<T> {
  value: T;
  getValue: () => T;
}

const numberContainer: Container<string> = {
    value:  "🐐X👑",
    getValue: function() {
        return this.value;
    }
}

console.log(numberContainer.getValue()); 


class Box<T> {
  private _content: T;

  constructor(content: T) {
    this._content = content;
  }

  getContent(): T {
    return this._content;
  }

  setContent(value: T): void {
    this._content = value;
  }
}

const stringBox = new Box<string>("Virat Kohli - The Chase Master");
console.log(stringBox.getContent()); 

stringBox.setContent("King Kohli");
console.log(stringBox.getContent()); 