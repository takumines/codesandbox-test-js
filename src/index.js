/**
 * const , let 等の変数宣言
 */

/**
 * varでの変数宣言は決まりがゆるい
 * 変数の上書きが可能
 */
// var val1 = "var変数";
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言が可能
// var val1 = "var変数を再宣言";
// console.log(val1);

/**
 * letについて
 */

//  let val2 = "let変数";
//  console.log(val2);

//  // letは上書きが可能
//  val2 = "let変数を上書き";
//  console.log(val2);

//  // letは際宣言不可能
//  let val2 ="let変数を再宣言";

/**
 * constについて
 */

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可
//  val3 = "const変数の上書き";

// const変数は再宣言不可
// const val3 = "const変数の再宣言";

// オブジェクトや配列の場合は書き換えができる
// const val4 = {
//   name: "拓巳",
//   age: 25
// };

// val4.name = "kurogi";
// val4.address = "miyazaki";
// console.log(val4);

// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列について
 */

// const name = "拓巳";
// const age = 25;

// // 「私の名前は拓巳です。年齢は25歳です。」
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// // テンプレート文字列を用いた場合
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数について
 */

// 従来の関数
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("test"));

// // アロー関数
// // 処理が一行で終わる場合はreturnを省略できる
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));

/**
 * 分割代入について
 */

//  const myProfile = {
//    name: "拓巳",
//    age: 25,
//  };
//  const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
//  console.log(message1);

//  const { name, age } = myProfile;
//  const message2 = `名前は${name}です。年齢は${age}です。`;
//  console.log(message2);

const myProfile = ["拓巳", 25];
const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
console.log(message3);

const [name, age] = myProfile;
const message4 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message4);
