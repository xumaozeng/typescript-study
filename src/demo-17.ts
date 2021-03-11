// 泛型-难以理解<T>

//泛型-通用、泛指的意思，就是泛指的类型定义使用<>来定义
function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}

join<string, number>("jspan", 1);

function myFun<T>(params: T[]) {
  return params;
}

myFun<string>(["s", "2"]);
