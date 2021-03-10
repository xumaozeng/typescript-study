// 类的只读属性
class XX {
  public readonly _name: string;
  constructor(name: string) {
    this._name = name;
  }
}

const xx = new XX("xiaofang");
// xx._name = "xxx";
// console.log(xx._name);

// 抽象类
abstract class Gril11 {
  abstract skill(): void; //因为没有具体方法，所以不写括号
}

class Waiter extends Gril11 {
  skill() {
    console.log("大爷，请喝水");
  }
}
class BaseTeacher extends Gril11 {
  skill() {
    console.log("大爷，来个泰式按摩");
  }
}
class SeniorTeacher extends Gril11 {
  skill() {
    console.log("大爷，来个全身SPA");
  }
}

const xiao = new SeniorTeacher();
xiao.skill();
