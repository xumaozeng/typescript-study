/**
 * 基础静态类型
 * null
 * undefined
 * symbol
 * boolean
 * void代表无的意思没有返回值
 */
const count: number = 918;
const myName: string = "xiaoxu";

/**
 * 对象类型
 * 数组
 * 类
 * 函数
 */

const xiaojiejie: {
  name: string;
  age: number;
} = {
  name: "大脚",
  age: 18
};

console.log(xiaojiejie.name);

const xiaojiejies: string[] = ["谢大脚", "1234"];

class Person {}
const dajiao: Person = new Person();

const jianXiaojiejie: () => string = () => {
  return "111";
};
