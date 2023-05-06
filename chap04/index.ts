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
const obj = {
    double(num: number): number {
        return num * 2;
    },
    double1: function(num: number): number {
        return num * 2
    },
}
console.log(obj);
