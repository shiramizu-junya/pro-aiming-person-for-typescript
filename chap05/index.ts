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
// class User {
//     name: string = '';
//     age: number = 0;

//     public isAdult(): boolean {
//         return this.age >= 20;
//     }
// }

// const hyo: User = new User();

// const john: User = {
//     name: 'John Smith',
//     age: 15,
//     isAdult: () => {
//         return true;
//     },
// }

// const User = class {
// 	name: string = '';
// 	age: number = 10;

// 	isAdult(): boolean {
// 		return this.age >= 20;
// 	}
// };

// const uhyo = new User();
// const john: User = new User();

// class User<T> {
//     name: string;
//     #age: number;
//     readonly data: T;

//     constructor(name: string, age: number, data: T) {
//         this.name = name;
//         this.#age = age;
//         this.data = data;
//     }
// }

// const uhyo: User<string> = new User('uhyo', 20, '追加データ');

/*
 * 5.2.2
 */
// class User {
//     name: string = 'hoge';
//     age: number = 0;
// }

// type MyUserConstructor = new () => User;

// const MyUser: MyUserConstructor = User;
// const u = new MyUser();
// console.log(u.name, u.age);

/*
 * 5.2.3
 */
// class User {
//     name: string = 'hoge';
//     age: number = 0;
// }

// const uhyo = new User();
// console.log(uhyo instanceof User);
// console.log({} instanceof User);

// type HasAge = {
//     age: number;
// }

// class User {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }

// function getPrice(customer: HasAge) {
//     if (customer instanceof User) {
//         if (customer.name === 'uhyo') {
//             return 0;
//         }
//     }
//     return customer.age < 18 ? 1000 : 1800;
// }

// const customer1: HasAge = { age: 15 };
// const customer2: HasAge = { age: 40 };
// const uhyo = new User('uhyo', 26);

// console.log(getPrice(customer1));
// console.log(getPrice(customer2));
// console.log(getPrice(uhyo));

/*
 * 5.3.1
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

// class PremiumUser extends User {
//     rank: number = 1;
// }

// const uhyo = new PremiumUser('uhyo', 30);
// console.log(uhyo.rank);
// console.log(uhyo.name);
// console.log(uhyo.isAdult());

/*
 * 5.3.2
 */
// class User {
// 	name: string;
// 	#age: number;

// 	constructor(name: string, age: number) {
// 		this.name = name;
// 		this.#age = age;
// 	}

// 	public isAdult(): boolean {
// 		return this.#age >= 20;
// 	}
// }

// class PremiumUser extends User {
//     rank: number = 1;

//     constructor(name: string, age: number, rank: number) {
//         super(name, age);
//         this.rank = rank;
//     }

//     public isAdult(): boolean {
//         return true;
//     }
// }

// const john = new User('john', 10);
// const uhyo = new PremiumUser('uhyo', 30, 5);
// console.log(uhyo.name);
// console.log(uhyo.rank);

/*
 * 5.3.3
 */
// class User {
// 	name: string;
// 	#age: number;

// 	constructor(name: string, age: number) {
// 		this.name = name;
// 		this.#age = age;
// 	}

// 	public isAdult(): boolean {
// 		return this.#age >= 20;
// 	}
// }

// class PremiumUser extends User {
//     rank: number = 1;

//     public override isAdult(): boolean {
//         return true;
//     }
// }

/*
 * 5.3.4
 */
// class User {
// 	name: string;
// 	protected age: number;

// 	constructor(name: string, age: number) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	public isAdult(): boolean {
// 		return this.age >= 20;
// 	}
// }

// class PremiumUser extends User {
//     rank: number = 1;

//     public isAdult(): boolean {
//         return this.age >= 10;
//     }
// }

/*
 * 5.3.5
 */
// type HasName = {
//     name: string;
// }

// class User implements HasName {
// 	name: string;
// 	#age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.#age = age;
//     }

//     public isAdult(): boolean {
//         return this.#age >= 20;
//     }
// }

/*
 * 5.4.1
 */
// class User {
// 	name: string;
// 	#age: number;

// 	constructor(name: string, age: number) {
// 		this.name = name;
// 		this.#age = age;
// 	}

//     public isAdult(): boolean {
//         console.log(this);
// 		return this.#age >= 20;
// 	}
// }
// const uhyo = new User('uhyo', 25);
// const john = new User('john', 15);
// console.log(uhyo.isAdult());
// console.log(uhyo.isAdult === john.isAdult);
// const isAdult = uhyo.isAdult;
// console.log(isAdult());

/*
 * 5.4.2
 */
// class User {
// 	name: string;
// 	#age: number;

// 	constructor(name: string, age: number) {
// 		this.name = name;
// 		this.#age = age;
// 	}

// 	public isAdult(): boolean {
// 		console.log(this);
// 		return this.#age >= 20;
//     }

//     public filterOlder(user: readonly User[]): User[] {
//         return user.filter(u => u.#age > this.#age);
//     }
// }

// const uhyo = new User('uhyo', 25);
// const john = new User('john', 15);
// const bob = new User('bob', 40);

// const older = uhyo.filterOlder([john, bob]);
// console.log(older);

/*
 * 5.4.3
 */
// class User {
// 	name: string;
// 	#age: number;

// 	constructor(name: string, age: number) {
// 		this.name = name;
// 		this.#age = age;
// 	}

// 	public isAdult(): boolean {
// 		console.log(this);
// 		return this.#age >= 20;
//     }
// }

// const uhyo = new User('uhyo', 25);
// const john = new User('john', 15);

// console.log(uhyo.isAdult());
// console.log(uhyo.isAdult.apply(john, []));

/*
 * 5.4.4
 */
// class A {
//     foo = 123;
//     bar = this.foo + 100;
// }
// const obj = new A();
// console.log(obj.bar);

/*
 * 5.5.1
 */
// console.log('エラーを発生させます');
// throwError();
// console.log('エラーを発生させました');

// function throwError() {
//     const error = new Error('エラーが発生しました');
//     throw error;
// }

/*
 * 5.5.2
 */
// try {
// 	console.log('エラーを発生させます');
// 	throwError();
// 	console.log('エラーを発生させました');
// } catch(err) {
//     console.log('エラーをキャッチしました');
//     console.log(err);
// }
// console.log('終わり');

// function throwError() {
// 	const error = new Error('エラーが発生しました');
// 	throw error;
// }
