"use strict";
/*
 * 3.1.1
 */
// const obj = {
//     foo: 123,
//     bar: 'Hello, world'
// };
// console.log(obj.foo);
/*
 * 3.1.2
 */
// const input = '';
// const userName = input ? input : '名無し';
// const user = {
//     userName,
//     age: 20,
// }
/*
 * 3.1.3
 */
// const propName = 'foo';
// const obj = {
//     [propName]: 123,
// }
// console.log(obj.foo);
/*
 * 3.1.5
 */
// const obj1 = {
//     bar: 456,
//     baz: 789,
// }
// const obj2 = {
//     foo: 123,
//     ...obj1,
// }
// const obj3 = { ...obj1 };
// console.log(obj2);
// console.log(obj3);
// obj1.bar = 1000;
// console.log(obj1);
// console.log(obj3);
// console.log(obj1 === obj3);
/*
 * 3.1.6
 */
// const foo = { num: 123 };
// const bar = foo;
// console.log(bar);
// bar.num = 0;
// console.log(bar);
// console.log(foo);
// const foo = { obj: { num: 1234 } };
// const bar = { ...foo };
// console.log(foo);
// console.log(bar);
// bar.obj.num = 0;
// console.log(bar);
// console.log(foo);
/*
 * 3.2.1
 */
// const obj: {
// 	foo: number;
//     bar: string;
//     'foo bar': number,
// } = {
// 	foo: 123,
//     bar: 'Hello, world',
//     'foo bar': 1000,
// };
/*
 * 3.2.2
 */
// const obj: {
//     foo: number;
//     bar: string;
// } = {
//     foo: 123,
//     bar: 'hello',
// };
// obj.foo = 'world';
// console.log(obj.hoge);
/*
 * 3.2.3
 */
// type FooBarObjType = {
//     hoge: number;
//     bar: string;
// }
// const objTmp: FooBarObjType = {
// 	hoge: 100,
// 	bar: 'Hello',
// };
// type UserId = string;
// const id: UserId = '10';
/*
 * 3.2.4
 */
// interface FooBarObj {
//     foo: number;
//     bar: string;
// }
// const objTmp: FooBarObj = {
//     foo: 0,
//     bar: 'Hello',
// }
/*
 * 3.2.5
 */
// type PriceData = {
//     [key: string]: number;
// }
// const data: PriceData = {
//     apple: 100,
//     coffee: 200,
//     cake: 500,
// }
const propName = 'foo';
const objTmp = {
    [propName]: 123
};
console.log(objTmp.foo);
