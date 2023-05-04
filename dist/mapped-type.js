"use strict";
const arrayOfNumbers = [1, 2, 3];
const arrayOfStrings = arrayOfNumbers.map((num) => num.toString());
console.log(arrayOfStrings);
const rectangularArea = {
    height: 10,
    width: 12,
};
const area1 = {
    height: 100,
    width: 200,
};
// function getArrayItem<T, K extends keyof T>(
// 	arr: T[],
// 	index: number,
// 	key: K
// ): T[K] {
// 	const item = arr[index];
// 	return item[key];
// }
// const users = [
// 	{ name: "John", age: 30 },
// 	{ name: "Mary", age: 25 },
// ];
// console.log(getArrayItem(users, 0, "name"));
// type Data = { num1: number };
// type BA = {
// 	[key in keyof Data]: string;
// };
// const numbers: BA = {
// 	num1: "20",
// };
// interface Person {
// 	firstName: string;
// 	lastName: string;
// }
// function fullName<T extends Person>(person: T): string {
// 	return `${person.firstName} ${person.lastName}`;
// }
// console.log(fullName({ firstName: "hello", lastName: "World" }));
