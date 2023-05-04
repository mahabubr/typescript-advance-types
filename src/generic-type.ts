type GenericArray<T> = Array<T>;
type GeneticTuple<X, Y> = [X, Y];

type NameRollType = { name: string; roll: number };
type relationWithSalaryType = { name: string; salary: number };

interface IRelationWithSalary {
	name: string;
	salary: number;
}

const rollNumber1: GenericArray<number> = [44, 12, 15];
const rollNumber2: GenericArray<string> = ["50", "60", "70"];
const rollNumber3: GenericArray<boolean> = [true, false];
const userNameAndRoll: GenericArray<NameRollType> = [
	{ name: "Mr X", roll: 1 },
	{ name: "Mr Y", roll: 2 },
];

const relation: GeneticTuple<string, string> = ["Parsian", "Kat"];

const relationWithSalary: GeneticTuple<object, string> = [
	{ name: "parsian", salary: 1500 },
	"Kate Wildsom",
];

const relationWithSalary2: GeneticTuple<IRelationWithSalary, string> = [
	{ name: "parsian", salary: 1500 },
	"Kate Wildsom",
];
