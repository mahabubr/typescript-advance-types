// Object

interface IUser {
	name: string;
	age: number;
}

interface IExtendUser extends IUser {
	role: string;
}

const userWithInterface: IUser = {
	name: "interface",
	age: 200,
};

const user1: IExtendUser = {
	age: 200,
	name: "Extend Interface",
	role: "Admin",
};

// Function

type addNumberTypes = (num1: number, num2: number) => number;

interface IAddNumbers {
	(num1: number, num2: number): number;
}
const addNumbers: IAddNumbers = (num1, num2) => num1 + num2;

// Array

type rollNumbersType = number[];

interface IRollNumbers {
	[index: number]: number;
}
const rollNumbers: IRollNumbers = [1, 4, 5];
