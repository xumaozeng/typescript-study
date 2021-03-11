// 联合类型
interface Waiter {
  anjiao: boolean;
  say: () => {};
}

interface Teachers1 {
  anjiao: boolean;
  skill: () => {};
}

function judgeWho(animal: Waiter | Teachers1) {
  // 类型保护-类型断言
  if (animal.anjiao) {
    (animal as Teachers1).skill();
  } else {
    (animal as Waiter).say();
  }
}

// 类型保护-instanceof
class NumberObj {
  count: number = 0;
}
function addObj(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0;
}
