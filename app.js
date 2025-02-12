//  Q1　変数
let nickname = 'かおりちゃん';
let age = 29;
let msg = '私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。';
console.log(msg);

// Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let msg2 = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;
console.log(msg2);
// テンプレートリテラル : バッククオートを使う、改行可能、変数の埋め込み可能


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
let ttlAge = playerList.reduce((acc, player) => acc + player.age, 0);
let aveAge = ttlAge / playerList.length;
console.log(aveAge);
// length : 配列の要素数、文字列の文字数を取得できる
// reduce : 初期値を指定して、累積していく処理が可能(合計、最大値、平均値など)


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
user.sayHello();

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
// Math.random : 0以上1未満のランダムな少数を生成
// Math.floor : 引数として与えられた数値を切り捨てて整数にする


// Q2 コールバック関数
setTimeout(function(){
  console.log('Hello World!');
}, 3000);
// コールバック関数 : ある処理が終わった後に実行される関数のこと
// →この場合setTimeoutがコールバック関数になる


// Q3 if
let num = 2;
if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else {
  console.log('num is 0');
}

// Q4 for
let numbers = [];
for (let i = 0; i <= 99; i++){
  numbers.push(i);
}
console.log(numbers);
// i++ : iの値を1つ増やすため
// numbers.push(i) : iの値を配列(numbers)に追加するため

// Q5 for × if
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++){
  let value = mixed[i];

if (typeof value === 'number') {
  if (value % 2 === 0){
    console.log('even');
  } else {
    console.log('odd');
  }
}
else {
  console.log('not number');
}
}
