"use strict";
/*
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
function getPrice(customer) {
    if (customer instanceof User) {
        if (customer.name === 'uhyo') {
            return 0;
        }
    }
    return customer.age < 18 ? 1000 : 1800;
}
const customer1 = { age: 15 };
const customer2 = { age: 40 };
const uhyo = new User('uhyo', 26);
console.log(getPrice(customer1));
console.log(getPrice(customer2));
console.log(getPrice(uhyo));
