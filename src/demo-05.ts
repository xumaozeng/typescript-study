function getTotal(one: number, two: number): number {
  return one + two;
}

const total1 = getTotal(1, 2);

// 函数无返回值void
function sayHello(): void {
  console.log("Hello World");
}

// 永远执行不完never
function forNever(): never {
  while (true) {}
}

function errFunction(): never {
  throw new Error();
}

// 函数参数为解构时
function add({ one, two }: { one: number; two: number }) {
  return one + two;
}

const total2 = add({ one: 1, two: 2 });

function getNumber({ one }: { one: number }) {
  return one;
}

const one = getNumber({ one: 1 });
