type a1 = number;
type a2 = a1 extends string ? string : null;

// Nested Conditional Type

type a3 = undefined;
type a4 = null;
type d = a1 extends null
	? null
	: a3 extends number
	? number
	: a4 extends null
	? null
	: never;

type Sheikh = {
	wife1: string;
	wife2: string;
};

type CheckProperty<T, K> = K extends keyof T ? true : false;
type CheckWife1 = CheckProperty<Sheikh, "wife1">;

// More Example
type Bandhupi = "Monika" | "Rachel" | "Pheobe";
type RemoveBandhubi<T, U> = T extends U ? never : T;
type CurrentBandhubi = RemoveBandhubi<Bandhupi, "Monika">;
