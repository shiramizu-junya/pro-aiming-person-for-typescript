"use strict";
/*
 *
 */
// ----------------------------------
//
// ----------------------------------
// ->
// >
/*
 * 5.1.1
 */
// class User {
// 	name: string = '';
// 	age: number = 0;
// }
// const uhyo = new User();
// console.log(uhyo);
// console.log(uhyo.name);
// console.log(uhyo.age);
// uhyo.age = 20;
// console.log(uhyo.age);
/*
 * 5.1.2
 */
// class User {
// 	name: string = '';
// 	age: number;
// }
// class User {
//     name?: string;
//     age: number = 0;
// }
/*
 * 5.1.3
 */
// class User {
//     name: string = '';
//     age: number = 0;
//     isAdult() {
//         return this.age >= 20;
//     }
//     setAge(newAge: number) {
//         this.age = newAge;
//     }
// }
/*
 * 5.1.4
 */
// class User {
//     name: string;
//     readonly age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     isAdult() {
//         return this.age >= 20;
//     }
//     setAge(newAge: number) {
//         this.age = newAge;
//     }
// }
// const uhyo = new User('uhyo', 25);
// console.log(uhyo.name);
// console.log(uhyo.age);
/*
 * 5.1.5
 */
// class User {
//     static adminName: string = 'uhyo';
//     static getAdminUser() {
//         return new User(User.adminName, 25);
//     }
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     isAdult() {
//         return this.age >= 20;
//     }
// }
// console.log(User.adminName);
// const admin = User.getAdminUser();
// console.log(admin);
/*
 * 5.1.6
 */
// class User {
//     name: string;
//     private age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     public isAdult() {
//         return this.age >= 20;
//     }
// }
// const uhyo = new User('uhyo', 25);
// console.log(uhyo.isAdult());
// console.log(uhyo.age);
/*
 * 5.1.7
 */
// class User {
//     name: string;
//     private age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }
// class User {
//     constructor(public name: string, private age: number) {
// 	}
// }
/*
 * 5.1.8
 */
// const User = class {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     public isAdult(): boolean {
//         return this.age >= 20;
//     }
// }
// const uhyo = new User('uhyo', 20);
// console.log(uhyo.age);
/*
 * 5.1.9
 */
// class User {
//     name: string;
//     #age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.#age = age;
//     }
//     public isAdult(): boolean {
//         return this.#age >= 20;
//     }
// }
// const uhyo = new User('uhyo', 20);
// console.log(uhyo.isAdult());
// console.log(uhyo.age);
/*
 * 5.1.10
 */
// console.log('Hello');
// class C {
//     static {
//         console.log('uhyo');
//     }
// }
// console.log('world');
// class User {
//     static adminUser: User;
//     static {
//         this.adminUser = new User();
//         this.adminUser.#age = 9999;
//     }
//     #age: number = 0;
//     getAge() {
//         return this.#age;
//     }
//     setAge(age: number) {
//         if (age < 0 || age > 150) return;
//         this.#age = age;
//     }
// }
// console.log(User.adminUser);
/*
 * 5.1.11
 */
// class User<T> {
//     name: string;
//     #age: number;
//     readonly data: T;
//     constructor(name: string, age: number, data: T) {
//         this.name = name;
//         this.#age = age;
//         this.data = data;
//     }
//     public isAdult(): boolean {
//         return this.#age >= 20;
//     }
// }
// const uhyo = new User<string>('uhyo', 20, '追加データ');
// const data = uhyo.data;
// const john = new User('john', 30, { num: 120 });
// const data2 = john.data;
/*
 * 5.2.1
 */
