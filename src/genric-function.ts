type Name = { name: string };

const createArray = <T>(param: T): T[] => {
	return [param];
};

const createArray1 = <X, Y>(param1: X, param2: Y): [X, Y] => {
	return [param1, param2];
};

function createArray2<X, Y>(param1: X, param2: Y): [X, Y] {
	return [param1, param2];
}

const result = createArray<string>("Bangladesh");
const result2 = createArray<boolean>(true);
const result3 = createArray<Name>({ name: "BD" });

const result4 = createArray1<string, string>("Bangladesh", "I Love My Country");
const result5 = createArray1<boolean, Array<string>>(true, ["USA"]);
const result6 = createArray1<Name, boolean>({ name: "BD" }, false);

// Spread Operator

const crush = "Kane Winslate";
const myInfo = {
	name: "Parsian",
	age: 100,
	salary: 150000,
};
const newData = { ...myInfo, crush };

const addMeToMyCrushMind = <T>(myInfo: T) => {
	const crush = "Kane Winslate";
	const newData = { ...myInfo, crush };
	return newData;
};

const result7 = addMeToMyCrushMind(myInfo);
result7.age;
