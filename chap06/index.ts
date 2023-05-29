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
// function getHelloStr(): `Hello, ${string}!` {
//     const rand = Math.random();
//     if (rand < 0.3) {
//         return 'Hello, world!';
//     } else if (rand < 0.6) {
//         return 'Hello, my world!';
//     } else if (rand < 0.9) {
//         return 'Hello, world.';
//     } else {
//         return 'Hell, world!';
//     }
// }

/*
 * 6.3.1
 */
// type SignType = 'plus' | 'minus';

// function signNumber(type: SignType) {
//     return type === 'plus' ? 1 : -1;
// }

// function numberWithSign(num: number, type: SignType | 'none') {
//     if (type === 'none') {
//         return 0;
//     } else {
//         return num * signNumber(type);
//     }
// }

/*
 * 6.3.3
 */
// type Animal = {
//     tag: 'animal';
//     species: string;
// }

// type Human = {
//     tag: 'human';
//     name: string;
// }

// type User = Animal | Human;

// function getName(user: User) {
//     if (user.tag === 'human') return user.name;
//     return '名無し';
// }

// const tama: User = {
//     tag: 'animal',
//     species: 'cats'
// }

// const uhyo: User = {
//     tag: 'human',
//     name: 'uhyo',
// }

// const alis: User = {
//     tag: 'alis',
//     name: 'gray'
// }

/*
 * 6.3.4
 */
// type Animal = {
//     tag: 'animal';
//     species: string;
// }

// type Human = {
//     tag: 'human';
//     name: string;
// }

// type Robot = {
//     tag: 'robot';
//     name: string;
// }

// type User = Animal | Human | Robot;

// function getName(user: User): string {
//     // if (user.tag === 'human') return user.name;
//     // return '名無し';
//     switch (user.tag) {
//         case 'human':
//             return user.name;
//         case 'animal':
//             return '名無し';
//     }
// }

/*
 * 6.4.1
 */
// type Human = {
//     type: 'human';
//     name: string;
//     age: number;
// }

// function setAge(human: Human, age: Human['age']) {
//     return {
//         ...human,
//         age
//     };
// }

// const uhyo: Human = {
//     type: 'human',
//     name: 'uhyo',
//     age: 20,
// }

// const uhyo2 = setAge(uhyo, 30);
// console.log(uhyo2);

/*
 * 6.4.1
 */
// type Human = {
//     type: 'human';
//     name: string;
//     age: number;
// }

// type HumanKeys = keyof Human;

// let key: HumanKeys = 'name';

// key = 'age';

// key = 'hoge';

// const mmConversionTable = {
//     mm: 1,
//     m: 1e3,
//     km: 1e6,
// }

// function convertUnits(value: number, unit: keyof typeof mmConversionTable) {
//     const mmValue = value * mmConversionTable[unit];
//     return {
//         mm: mmValue,
//         m: mmValue / 1e3,
//         km: mmValue / 1e6
//     }
// }

// console.log(convertUnits(5600, 'm'));

/*
 * 6.4.3
 */
// function get<T, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key];
// }

// type Human = {
//     name: string;
//     age: number;
// }

// const uhyo: Human = {
//     name: 'uhyo',
//     age: 25,
// }

// const uhyoName = get(uhyo, 'name');

/*
 * 6.4.4
 */
// type Obj = {
//     0: string;
//     1: number;
// }

// const obj: Obj = {
//     0: 'uhyo',
//     '1': 25,
// }

// obj['0'] = 'john';
// obj[1] = 10;

// type ObjKeys = keyof Obj;

/*
 * 6.5.1
 */
// function getFirstFiveLetters(strOrNum: string | number) {
//     const str = strOrNum as string;
//     return str.slice(0, 5);
// }

// console.log(getFirstFiveLetters('uhyohyohyo'));
// console.log(getFirstFiveLetters(123456));

/*
 * 6.5.2
 */
// const name1 = ['uhyo', 'john', 'taro'];
// const name2 = ['uhyo', 'john', 'taro'] as const;

/*
 * 6.6.1
 */
// function doWhatever(obj: any) {
//     console.log(obj.user.name);
//     obj();
//     const result = obj * 10;
//     return result;
// }

// doWhatever(3);

// doWhatever({
//     user: {
//         name: 'uhyo',
//     }
// });

// doWhatever(() => {
//     console.log('hi');
// });

/*
 * 6.6.3
 */
