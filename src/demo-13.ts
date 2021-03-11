/**
 * 类的访问类型private，封装一个属性
 * 通过Getter和Setter形式
 * 访问和修改这个属性
 */

class Xiaojie33 {
  constructor(private _age: number) {}

  static sayLove() {
    console.log("I Love you");
  }
  get age() {
    return this._age - 10;
  }
  set age(age: number) {
    this._age = age + 3;
  }
}

const dajiao1 = new Xiaojie33(28);
dajiao1.age = 29;
console.log(dajiao1.age);
Xiaojie33.sayLove();
