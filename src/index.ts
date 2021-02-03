const hello = "xiaoxu!";

function sayHello(msg: string) {
  return "hello, " + msg;
}

document.body.textContent = sayHello(hello);
