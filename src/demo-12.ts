class Person2 {
  constructor(public name: string) {}
}

class Teacher1 extends Person2 {
  constructor(public age: number, public name: string) {
    super(name);
  }
}

const person2 = new Teacher1(26, "xiaoxu");
console.log(person2.name);
console.log(person2.age);
