// public,private,protected属性的讲解

class Person1 {
  protected name: string = "xiaoxu";
}

class Teacher11 extends Person1 {
  public sayBye() {
    console.log(this.name);
  }
}

const person = new Teacher11();
person.sayBye();
