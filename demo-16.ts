// 枚举类型Enum

enum Status {
  MESSAGE = 1,
  SPA,
  DABAOJIAN
}

function getServe(status: any) {
  if (status === Status.MESSAGE) {
    return "message";
  } else if (status === Status.SPA) {
    return "SPA";
  } else if (status === Status.DABAOJIAN) {
    return "大保健";
  }
}

const result = getServe(1);
console.log(`我要去${result}`);
