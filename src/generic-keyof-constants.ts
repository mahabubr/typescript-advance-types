type PersonType = {
	name: string;
	age: number;
	address: string;
};

type NewType = "name" | "age" | "address"; // Manually
type NewTypeUsingKeyOf = keyof PersonType;

const a: NewType = "age";
const b: NewTypeUsingKeyOf = "address";

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
	obj[key];
}

const result9 = getProperty(
	{
		name: "Mr x",
		age: 200,
	},
	"name"
);

const ab = {
	name: "Mr x",
	age: 200,
};
