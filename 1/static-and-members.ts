class MathUtils {
  static PI: number = 3.14159;  

  static calculateArea(radius: number): number {  
    return MathUtils.PI * radius * radius;
  }

  static calculateCircumference(radius: number): number {
    return 2 * MathUtils.PI * radius;
  }
}

console.log(MathUtils.calculateArea(5));  
console.log(MathUtils.calculateCircumference(5));  
