/**
 * 数组类型
 */

const numberArr: number[] = [1, 2, 3];

const stringArr: string[] = ["1", "2"];

const undefinedArr: undefined[] = [undefined];

const arr: (number | string)[] = [1, 2, "2"];

// 数组中对象的定义
const xiaoJiejie1: { name: string; age: number }[] = [
  { name: "liu", age: 18 },
  { name: "hh", age: 18 }
];

// 类型别名 type alias
type Lady = {
  name: string;
  age: number;
};

const Xiaojie21: Lady[] = [
  {
    name: "xx",
    age: 28
  }
];
