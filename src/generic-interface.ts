interface CrushInterface<T, U = null, V = undefined> {
	name: string;
	husband: T;
	wife?: U;
	other?: V;
}

interface HusbandInterface {
	name: string;
	salary: number;
}

interface PersonInterface {
	name: string;
	age: number;
}

const crush3: CrushInterface<boolean, string> = {
	name: "kate winslate",
	husband: true,
	wife: "Depeka",
};
const crush4: CrushInterface<string> = {
	name: "Kate Winslate",
	husband: "Parsian",
};
const crush5: CrushInterface<HusbandInterface> = {
	name: "kane Winslate",
	husband: { name: "parsian", salary: 111 },
};
const crush6: CrushInterface<PersonInterface, PersonInterface> = {
	name: "Kate",
	husband: { name: "Paison", age: 30 },
	wife: {
		name: "Winslate",
		age: 40,
	},
};
