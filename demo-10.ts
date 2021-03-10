// 类的基本使用

class Lady1 {
  content = "Hi,帅哥";
  sayHello() {
    return this.content;
  }
}

class Xiaojie22 extends Lady1 {
  sayLove() {
    return "I love you";
  }
  sayHello() {
    return super.sayHello() + "你好";
  }
}

const goddess = new Xiaojie22();
console.log(goddess.sayHello());
console.log(goddess.sayLove());
