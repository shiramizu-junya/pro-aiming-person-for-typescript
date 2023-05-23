"use strict";
/*
 * 6.1.1
 */
// type Animal = {
//     species: string;
// };
// type Human = {
//     name: string;
//     age?: number;
// };
// type User =
//     | Animal
//     | Human;
// const tama: User = {
// 	species: 'Felis silvestrie catus',
// };
// const uhyo: User = {
//     name: 'uhyo',
//     age: 20,
// };
// const book: User = {
//     title: 'software'
// }
// function getName(user: User): string {
//     return user.name;
// }
/*
 * 6.1.2
 */
// type Animal = {
//     species: string;
//     age: string;
// };
// type Human = {
//     name: string;
//     age: number;
// };
// type User =
//     | Animal
//     | Human;
// const tama: User = {
//     species: 'Felis silvestrie catus',
//     age: '永遠の17歳'
// };
// const uhyo: User = {
//     name: 'uhyo',
//     age: 20,
// };
// function showAge(user: User) {
//     const age = user.age;
//     console.log(age);
// }
// type MysteryFunc =
//     |((str: string) => string)
//     |((str: string) => number);
// function userFunc(func: MysteryFunc) {
//     const result = func('uhyo');
//     console.log(result);
// }
/*
 * 6.1.3
 */
// type Animal = {
// 	species: string;
// 	age: number;
// };
// type Human = Animal & {
// 	name: string;
// };
// const tama: Animal = {
// 	species: 'Felis silvestris catus',
// 	age: 3,
// };
// const uhyo: Human = {
// 	species: 'Homo sapiens sapines',
// 	age: 25,
// 	name: 'uhyo',
// };
/*
 * 6.1.4
 */
// type Human = { name: string }
// type Animal = { species: string }
// const uhyo: Human & Animal = {
//     name: 'uhyo',
//     species: 'human'
// };
// const cat: Animal = {
//     species: 'cats',
// }
// function getName(human: Human) {
//     return human.name;
// }
// function getSpecies(animal: Animal) {
//     return animal.species;
// }
// const mysteryFunc = Math.random() < 0.5 ? getName : getSpecies;
// console.log(mysteryFunc);
// const value = mysteryFunc(uhyo);
// console.log(value);
// mysteryFunc(cat);
/*
 * 6.1.5
 */
// type Human = {
//     name: string;
//     age?: number | undefined;
// }
// const uhyo: Human = {
//     name: 'uhyo',
//     age: 25,
// };
// const john: Human = {
//     name: 'john',
//     // age: undefined,
// }
/*
 * 6.1.6
 */
// type Human = {
//     name: string;
//     age: number;
// }
// function useMaybeHuman(human: Human | undefined) {
//     const age = human?.age;
//     console.log(age);
// }
// useMaybeHuman(undefined);
// type GetTimeFunc = () => Date;
// function useTime(getTimeFunc: GetTimeFunc | undefined) {
//     const timeOrUndefined = getTimeFunc?.();
// }
// const obj: Human | undefined = undefined;
// console.log(obj?.age);
/*
 * 6.2.1
 */
// type FooString = 'foo';
// const foo: FooString = 'foo';
// const bar: FooString = 'bar';
/*
 * 6.2.2
 */
function getHelloStr() {
    const rand = Math.random();
    if (rand < 0.3) {
        return 'Hello, world!';
    }
    else if (rand < 0.6) {
        return 'Hello, my world!';
    }
    else if (rand < 0.9) {
        return 'Hello, world.';
    }
    else {
        return 'Hell, world!';
    }
}
