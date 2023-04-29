/*
 *
 */

// ----------------------------------
//
// ----------------------------------

// ->
// >

/*
 * 2.1.1 文と式の基本
 */

// ----------------------------------
// 'Hello, 'などは文字列リテラルの式
// const 変数名 = 式;
// console.log(式 + 式);
// ----------------------------------
// const greeting = 'Hello, ';　// -> 文
// const target = 'world';　// -> 文
// console.log(greeting + target);　// -> 式文

/*
 * 2.2.3 型注釈（type annotation）
 */
// const greeting: string = 'Hello, ';
// const target: string = 'world';
// const target: string = 100;
// console.log(greeting + target);

/*
 * 2.2.4
 */
// const greeting: string = 'Hello, ';
// greeting = 'World';
// let greeting: string;
// let target: string;
// greeting = 'Hello, ';
// console.log(greeting + target);

/*
 * 2.3.2
 */
// const width1 = 5;
// const width2 = 8;
// const height: number = 3;
// const area = (width1 + width2) * height / 2;
// console.log(area);

/*
 * 2.3.3
 */
// 2進数
// const binary = 0b1010; // > 10
// 8進数
// const octal = 0o755; // > 493
// 16進数
// const hexadecimal = 0xff; // > 255
// console.log(binary, octal, hexadecimal);

// const big = 1e8;
// const small = 4e-5;
// console.log(big, small); // > 100000000 0.00004

/*
 * 2.3.4
 */
// const bigInt: bigint = (123n + 456n) * 2n;
// console.log(bigInt);

// const result = 5n / 2n;
// console.log(result);

// const wrong = 100n + 50;

/*
 * 2.3.5
 */
// const str1: string = 'Hello,';
// const str2: string = 'World';
// const message: string = `Hello,
// World`;

// console.log(str1, str2);
// console.log(message);

// console.log(`${str1} ${str2}`);

/*
 * 2.3.6
 */
// console.log('Hello \\world/');
// console.log('Hello \u{20bb7} world');

/*
 * 2.3.7
 */
// const no: boolean = false;
// const yes: boolean = true;

/*
 * 2.3.8
 */
// let val1: null = null;
// let val2: undefined = undefined;
// val1 = 'hello';
// val2 = 'hello';

/*
 * 2.3.9, 2.3.40
 */
// Readableストリーム（process.stdinなど）からデータを1行ずつ読み込むためのインターフェイスを提供
// import { createInterface } from 'readline';

// createInterface()メソッドは、新しいreadlinePromises.Interfaceインスタンスを作成します。
// process.stdinプロパティは、stdin(fd0)に接続されたストリームを返します。
// process.stdoutプロパティは、stdout（fd1）に接続されたストリームを返します。
// const rl = createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// });

// console.log(createInterface)
// console.log(rl)

// rl.question('文字列を入力してください:', (line) => {
//     const num = Number(line);
//     if (isNaN(num)) console.log('数値を入力してください');
//     console.log(`${line}が入力されました`);
//     console.log(num + 100);
//     rl.close();
// });

// const bigInt = BigInt('foo');
// console.log(bigInt);

/*
 * 2.4.4
 */
// const left: number = 1;
// const right: number = 2;
// console.log(left === right);

// const str: any = '3';
// console.log(str == 3);

// const hoge = '';
// console.log(hoge == null);

/*
 * 2.4.5
 */

// console.log('foo' && 'bar');
// console.log(0 && 'foo');

// console.log('' ?? 'foo');

// console.log(process.env.SECRET);

// let userName: string | number = 0;
// userName ??= '名無し';
// console.log(userName);

/*
 * 2.5.1
 */
