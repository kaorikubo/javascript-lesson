//  Q1　変数
let nickname = 'かおりちゃん';
let age = 29;
let msg = `私のニックネームは${nickname}です。年齢は${age}歳です。`;
console.log(msg);

// Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let msg2 = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;
console.log(msg2);

// Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

// Q4 配列×オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

// Q5 四則演算
let aveAge = (playerList[0].age + playerList[1].age + playerList[2].age) / 3;
console.log(aveAge);

// Q6 関数 
function sayHello() {
  let msg3 = 'Hello';
  console.log(msg3);
}
sayHello();

const sayWorld = function() { 
  let msg4 = 'World';
  console.log(msg4);
}
sayWorld();

// Q7 メソッド
user.birthday = '2000-09-27';

user.sayHello = function() {
  console.log("Hello!");
}

// Q8 引数
let calc = {
  add: (x, y) => console.log(x + y),
  subtract: (x, y) => console.log(x - y),
  multiply: (x, y) => console.log(x * y),
  divide: (x, y) => console.log(x / y)
};
calc.add(4, 3);
calc.subtract(100, 90);
calc.multiply(7, 7);
calc.divide(10, 2);

// Q9 返り値
function remainder(x, y) {
  let division = x % y;
  return division;
}
let x = 5;
let y = 3;
let result = remainder(x, y);
console.log(x + 'を' + y + 'で割った余りは' + result + 'です');

// Q10 スコープ
// Javascriptではスコープ及び変数や関数がアクセスできる範囲が決まっているため、このxはすでに上記の関数の中で定義されている変数なので、上記の関数からしか参照できない。

// 応用編問題
// Q1 標準組み込みオブジェクト
let number = Math.floor(Math.random() * 10);
console.log(number);

// Q2 コールバック関数
setTimeout(function(){
  console.log('Hello World!');
}, 3000);

// Q3 if
let num = 2;
if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else if (num === 0) {
  console.log('num is 0');
}

// Q4 for
let numbers = [];
for (let i = 0; i <= 99; i++){
  numbers.push(i);
}
console.log(numbers);

// Q5 for × if
let mixed = [4, '2', 5, '8', '9', 0, 1];
for ($i = 0; $i < 10; $i++) {
  if ($i % 2 === 0) {
    console.log('even');
  }
  else if ($i % 2 === 1) {
    console.log('odd');
  }
  else  {
    console.log('not number');
  }
}
