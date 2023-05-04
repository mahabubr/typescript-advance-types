let amni: any;
amni = "New Level Web Development";

(amni as string).toLocaleLowerCase();
<string>amni.toLocaleLowerCase();

function kgToGram(param: string | number): string | number | undefined {
	if (typeof param === "string") {
		const value = parseFloat(param) * 1000;
		return `The Value Of ${value}`;
	}
	if (typeof param === "number") {
		const value = param * 1000;
		return value;
	}
}

const resultToBeNumber = kgToGram(200) as number;
const resultToBeString = <string>kgToGram("300");

type CustomErrorType = {
	message: string;
};

try {
} catch (e) {
	console.log((e as CustomErrorType).message);
}
