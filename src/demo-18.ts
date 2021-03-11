// 泛型约束

interface Girlx {
  name: string;
}

class SelectGirl<T extends Girlx> {
  constructor(private girls: T[]) {}
  getGirl(index: number): string {
    return this.girls[index].name;
  }
}

const selectGirl = new SelectGirl([
  { name: "小徐" },
  { name: "小x" },
  { name: "小s" }
]);
console.log(selectGirl.getGirl(1));
