// 接口的使用

interface Girls {
  name: string;
  age: number;
  bust: number;
  waistline?: number;
}

const screenResume = (girl: Girls) => {
  girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
  girl.age > 24 || (girl.bust < 90 && console.log(girl.name + "你被淘汰"));
};

const getResume = (girl: Girls) => {
  console.log(girl.name + "年龄是" + girl.age);
  console.log(girl.name + "胸围是" + girl.bust);
  girl.waistline && console.log(girl.name + "腰围是" + girl.waistline);
};

const girls111 = {
  name: "大脚",
  age: 18,
  bust: 94,
  waistline: 29
};

screenResume(girls111);
getResume(girls111);
