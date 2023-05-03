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
// const propName: string = 'foo';
// const objTmp = {
//     [propName]: 123
// }
// console.log(objTmp.foo);
/*
 * 3.2.6
 */
// type MyObj = {
//     foo: boolean;
//     bar: boolean;
//     baz?: number;
// }
// const obj1: MyObj = {
//     foo: false,
//     bar: true,
// }
// const obj2: MyObj = {
//     foo: true,
//     bar: false,
//     baz: 10,
// }
// console.log(obj1.baz);
// console.log(obj2.baz);
// if(obj1.baz !== undefined) console.log(obj1.baz * 10);
// if(obj2.baz !== undefined) console.log(obj2.baz * 20);
/*
 * 3.2.7
 */
// type MyObj = {
//     readonly foo: number;
// }
// const obj1: MyObj = { foo: 100 };
// console.log(obj1.foo);
// obj1.foo = 20;
/*
 * 3.2.8
 */
// const num: number = 10;
// type T = typeof num;
// const foo: T = 10;
// const obj = {
//     foo: 100,
//     bar: 'hi',
// };
// type T = typeof obj;
// const obj2: typeof obj = {
//     foo: 200,
//     bar: 'Hello',
// }
// const foo = {
//     foo: 500,
//     bar: 'World',
// }
// const res: typeof obj = typeof foo;
// const res = typeof foo;
/*
 * 3.3.1
 */
// type FooBar = {
//     foo: string;
//     bar: number;
// }
// type FooBarBaz = {
//     foo: string;
//     bar: number;
//     baz: boolean;
// }
// const obj1: FooBarBaz = {
//     foo: 'hi',
//     bar: 1,
//     baz: true,
// }
// const obj4: FooBar = {
//     foo: 'string',
//     bar: 100,
// }
// const obj2: FooBar = obj1;
// const obj3: FooBarBaz = obj4;
// obj2.baz;
/*
 * 3.3.2
 */
// type Animal = {
//     age: number;
// }
// type Human = {
//     age: number;
//     name: string;
// }
// type AnimalFamily = {
//     familyName: string;
//     mother: Animal;
//     father: Animal;
//     child: Animal;
// }
// type HumanFamily = {
// 	familyName: string;
// 	mother: Human;
// 	father: Human;
// 	child: Human;
// };
/*
 * 3.3.2
 */
// type User = {
//     name: string;
//     age: number;
// }
// const obj = {
//     name: 'uhyo',
//     age: 20,
//     tellNumber: '0767899202',
// }
// const u: User = obj;
/*
 * 3.4.1
 */
// type User<T> = {
//     name: string;
//     child: T;
// }
// type Family<Parent, Child> = {
//     mother: Parent;
//     father: Parent;
//     child: Child;
// }
/*
 * 3.4.2
 */
// const obj: Family<number, string> = {
//     mother: 30,
//     father: 40,
//     child: '5',
// }
/*
 * 3.4.3
 */
// type HasName = {
// 	name: string;
// };
// type Family<Parent extends HasName, Child extends HasName> = {
// 	mother: Parent;
// 	father: Parent;
// 	child: Child;
// };
// type T = Family<number, string>;
// type Animal = {
//     name: string;
// };
// type Human = {
//     name: string;
//     age: number;
// };
// type T = Family<Animal, Human>;
/*
 * 3.4.4
 */
// type Animal = {
// 	name: string;
// };
// type Family<Parent = Animal, Child = Animal> = {
// 	mother: Parent;
// 	father: Parent;
// 	child: Child;
// };
// type S = Family<string, string>;
// type T = Family;
// type U = Family<string>;
// const fam: S = {
//     mother: 'mother',
//     father: 'father',
//     child: 'child',
// }
// type AdultType = {
//     name: string;
//     age: number;
// }
// type BabyType = {
//     name: string;
//     age: number;
//     gender: string;
// }
// type Family<Parent extends AdultType, Child extends AdultType = BabyType> = {
// 	mother: Parent;
// 	father: Parent;
// 	child: Child;
// };
// type T = Family<AdultType>;
// const fam: T = {
//     mother: { name: 'mother', age: 30 },
//     father: { name: 'father', age: 33 },
//     child: { name: 'child', age: 0, gender: 'men' },
// }
/*
 * 3.5.1
 */
// const arr = [0, 123, -45600];
// const arr2 = [100, '文字列', false, ...arr];
// console.log(arr2);
/*
 * 3.5.2
 */
// const arr: number[] = [0, 123, -45600];
// console.log(arr['1']);
/*
 * 3.5.3
 */
// const arr: number[] = [10, 20, 30];
// const arr1: boolean[] = [true, false];
// const arr2: Array<{ name: string }> = [{ name: 'yamada' }, { name: 'suzuki' }, { name: 'tanaka' }];
// const arr3: { name: string }[] = [{ name: 'yamada' }, { name: 'suzuki' }, { name: 'tanaka' }];
// const arr4: (string | number | boolean)[] = ['string', 10, true];
// const arr5: Array<string | number | boolean> = ['string', 10, true];
/*
 * 3.5.4
 */
// const arr: readonly [number, number[]] = [10, [1, 2]];
// arr[0] = 20;
// arr[1][0] = 20;
/*
 * 3.5.5
 */
// [10, 20].includes(20);
/*
 * 3.5.6
 */
// const arr = [1, 20, 100];
// for (const elm of arr) {
// }
// console.log(arr[Symbol.iterator]());
/*
 * 3.5.7
 */
// type User = [name: string, age: number];
// const uhyo: User = ['uhyo', 20];
/*
 * 3.6.2
 */
// const nested = {
//     num: 100,
//     obj: {
//         foo: 'hello',
//         bar: 'world',
//     }
// }
// const { num, obj ,obj: { foo } } = nested;
// console.log(num);
// console.log(obj);
// console.log(foo);
/*
 * 3.6.3
 */
// const arr = [[10, 20]];
// const [[second, hoge]] = arr;
// console.log(second, hoge);
// const tuple: [string, number] = ['uhyo', 20];
// const [userName, age] = tuple;
/*
 * 3.6.4
 */
// const obj = { foo: null }
// const { foo = 100 } = obj;
// console.log(foo);
// type Obj = { foo?: number }
// const obj1: Obj = {};
// const { foo = 500 } = obj1;
// type NestedObj = {
//     obj?: {
//         foo: number;
//     }
// };
// const nested1: NestedObj = {
//     obj: {
//         foo: 123,
//     }
// };
// const nested2: NestedObj = {};
// const { obj: { foo: foo1 } = { foo: 500 } } = nested1;
// const { obj: { foo: foo2 } = { foo: 500 } } = nested2;
// console.log(foo1);
// console.log(foo2); // > 500
/*
 * 3.7.1
 */
