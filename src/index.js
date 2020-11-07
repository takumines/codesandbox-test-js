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

const val3 = "const変数";
console.log(val3);

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
