"use strict";
/*
 * 4.1.1
 */
// function range(min: number, max: number): number[] {
// 	const result: number[] = [];
// 	for (let i = min; i <= max; i++) {
// 		result.push(i);
// 	}
// 	return result;
// }
// console.log(range(5, 10));
/*
 * 4.1.3
 */
// type Human = {
//     height: number;
//     weight: number;
// }
// const calcBMI = function (human: Human): number {
//     return human.weight / human.height ** 2;
//     // console.log(height, weight);
// };
// const uhyo: Human = { height: 1.84, weight: 72 };
// console.log(calcBMI(uhyo));
/*
 * 4.1.5
 */
// type Human = {
//     height: number;
//     weight: number;
// }
// type ReturnObj = {
//     bmi: number;
// }
// // const calcBMI = ({ height, weight }: Human): number => weight / height ** 2
// const calcBMI = ({ height, weight }: Human): ReturnObj => ({
// 	bmi: weight / height ** 2;
// });
// const uhyo: Human = { height: 1.84, weight: 72 };
// console.log(calcBMI(uhyo));
/*
 * 4.1.6
 */
// const obj = {
//     double(num: number): number {
//         return num * 2;
//     },
//     double1: function(num: number): number {
//         return num * 2
//     },
// }
// console.log(obj.double(100));
/*
 * 4.1.7
 */
// const sum = (...args: number[]) => {
//     let result = 0;
//     for (const num of args) {
//         result += num;
//     }
//     return result;
// }
// console.log(sum(10, 20, 30));
/*
 * 4.1.9
 */
// const toLowerOrUpper = (str: string, upper?: boolean): string => {
//     if (upper) {
//         return str.toUpperCase();
//     } else {
//         return str.toLowerCase();
//     }
// }
// console.log(toLowerOrUpper('Hello'));
// console.log(toLowerOrUpper('Hello', false));
// console.log(toLowerOrUpper('Hello', true));
// console.log(toLowerOrUpper('Hello', undefined));
/*
 * 4.1.10
 */
// type User = {
//     name: string;
//     age: number;
// }
// // const getName = (u: User): string => u.name;
// const users: User[] = [
//     { name: 'uhyo', age: 25 },
//     { name: 'john', age: 15 },
// ];
// const names = users.map((u: User): string => u.name);
// console.log(names);
/*
 * 4.2.1
 */
// const xRepeat = (num: number): string => 'x'.repeat(num);
// type F = (repeatNum: number) => string;
// const xRepeat: F = (num: number): string => 'x'.repeat(num);
// console.log(xRepeat(5));
/*
 * 4.2.2
 */
// const xRepeat = (num: number) => 'x'.repeat(num);
// const g = (num: number) => {
//     for (let i = 0; i < num; i++) {
//         console.log('Hello, World');
//     }
// }
/*
 * 4.2.3
 */
// function range(min: number, max: number): number[] {
//     const result = [];
//     for (let i = min; i <= max; i++) {
//         result.push(i);
//     }
//     // return result;
// }
// const arr = range(5, 10);
// for (const value of arr) {
//     console.log(value);
// }
// function range(min: number, max: number) {
// 	const result = [];
// 	for (let i = min; i <= max; i++) {
// 		result.push(i);
// 	}
// }
// const arr = range(5, 10);
// for (const value of arr) {
// 	console.log(value);
// }
/*
 * 4.2.4
 */
// const nums = [1, 2, 3, 4, 5, 6];
// const arr2 = nums.filter((x) => x % 3 === 0);
// console.log(arr2);
/*
 * 4.2.5
 */
// type MyFunc = {
//     isUsed?: boolean;
//     (args: number): void; // コールシグネチャー
// }
// const double: MyFunc = (args: number) => {
//     console.log(args * 2);
// }
// double.isUsed = true;
// console.log(double.isUsed);
// double(100);
/*
 * 4.3.1
 */
// type HasName = {
//     name: string;
// }
// HasNameの部分型
// type HasNameAndAge = {
//     name: string;
//     age: number;
// }
// const fromAge = (age: number): HasNameAndAge => (
//     {
//         name: 'John',
//         age,
//     }
// )
// const f: (age: number) => HasName = fromAge;
// const obj: HasName = f(100);
/*
 * 4.3.2
 */
// // 型T
// type HasName = {
//     name: string;
// }
// // 型S
// type HasNameAndAge = {
//     name: string;
//     age: number;
// }
// const showName = (obj: HasName) => {
//     console.log(obj.name);
// }
// const g: (obj: HasNameAndAge) => void = showName;
// g({ name: 'uhyo', age: 20 });
/*
 * 4.3.3
 */
// type UnaryFunc = (arg: number) => number;
// type BinaryFunc = (left: number, right: number) => number;
// const double: UnaryFunc = (arg) => arg * 2;
// const add: BinaryFunc = (left, right) => left + right;
// const bin: BinaryFunc = double;
/*
 * 4.4.1
 */
// function repeat<T>(element: T, length: number): T[] {
//     const result: T[] = [];
//     for (let i = 0; i < length; i++) {
//         result.push(element);
//     }
//     return result;
// }
// console.log(repeat<string>('a', 5));
// console.log(repeat<number>(120, 3));
/*
 * 4.4.2
 */
// 関数式のジェネリクス型
// const repeat = function<T>(element: T, length: number): T[] {
//     const result: T[] = [];
//     for (let i = 0; i < length; i++) {
//         result.push(element);
//     }
//     return result;
// }
// アロー関数のジェネリクス型
// const repeat = <T>(element: T, length: number): T[] => {
//     const result: T[] = [];
//     for (let i = 0; i < length; i++) {
//         result.push(element);
//     }
//     return result;
// }
// メソッド記法のジェネリクス型
// const utils = {
//     repeat<T>(element: T, length: number): T[] {
//         const result: T[] = [];
//         for (let i = 0; i < length; i++) {
//             result.push(element);
//         }
//         return result;
//     }
// }
// const repeat = <T extends { name: string }>(element: T, length: number): T[] => {
// 	const result: T[] = [];
// 	for (let i = 0; i < length; i++) {
// 		result.push(element);
// 	}
// 	return result;
// };
// type HasNameAndAge = {
//     name: string;
//     age: number;
// }
// console.log(repeat<HasNameAndAge>({ name: 'uhyo', age: 10 }, 3)); // > [{ name: 'uhyo', age: 10 }, { name: 'uhyo', age: 10 }, { name: 'uhyo', age: 10 }]
/*
 * 4.4.3
 */
// function repeat<T>(element: T, length: number): T[] {
//     const result: T[] = [];
//     for (let i = 0; i < length; i++) {
//         result.push(element);
//     }
//     return result;
// }
// const result = repeat('a', 5);
/*
 * 4.4.4
 */
// type Func = <T>(element: T, length: number) => T[];
// const repeat: Func = (element, length) => {
//     const result = [];
//     for (let i = 0; i < length; i++) {
//         result.push(element);
//     }
//     return result;
// }
/*
 * 4.5.1
 */
// const repeat = function<T>(element: T, length: number): T[] {
//     const result: T[] = [];
//     for (let i = 0; i < length; i++) {
//         result.push(element);
//     }
//     return result;
// }
// console.log(result);
