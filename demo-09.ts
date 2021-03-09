// 接口的使用

interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline?: number;
  [propname: string]: any;
  say(): string;
}

// 接口继承
interface Teacher extends Girl {
  teach(): string;
}

const screenResume1 = (girl: Girl) => {
  girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
  girl.age > 24 || (girl.bust < 90 && console.log(girl.name + "你被淘汰"));
};

const getResume1 = (girl: Teacher) => {
  console.log(girl.name + "年龄是" + girl.age);
  console.log(girl.name + "胸围是" + girl.bust);
  girl.waistline && console.log(girl.name + "腰围是" + girl.waistline);
  girl.sex && console.log(girl.name + "性别是" + girl.sex);
  console.log(girl.teach());
};

const girls1 = {
  name: "大脚",
  age: 18,
  bust: 94,
  waistline: 29,
  sex: "女",
  say() {
    return "欢迎光临";
  },
  teach() {
    return "老师";
  }
};

screenResume1(girls1);
getResume1(girls1);
