type MandatoryType = {
	name: string;
	age: number;
	salary: number;
	other1: boolean;
	other2: null;
};

interface MandatoryInterface {
	name: string;
	age: number;
	salary: number;
	other1: boolean;
	other2: null;
}

type MyInfoType = {
	name: string;
	age: number;
	salary: number;
	other1: boolean;
	other2: null;
};

const myInfo1: MyInfoType = {
	name: "Parsian",
	age: 100,
	salary: 150000,
	other1: false,
	other2: null,
};

const addMeToMyCrushMind1 = <T extends MandatoryInterface>(myInfo: T) => {
	const crush = "Kane Winslate";
	const newData = { ...myInfo, crush };
	return newData;
};

const result8 = addMeToMyCrushMind1<MyInfoType>(myInfo1);
result8.age;
