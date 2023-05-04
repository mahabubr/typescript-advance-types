// Mocking
const makePromise = (): Promise<string> => {
	return new Promise<string>((resolved, reject) => {
		const data: string = "data is fetch";
		if (data) {
			resolved(data);
		} else {
			reject("Failed To Fetch");
		}
	});
};

const getPromise = async (): Promise<string> => {
	const result10 = await makePromise();
	return result10;
};

// Fetch JSON Placeholder API

interface ITodo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	return await response.json();
};

const getTodoData = async (): Promise<void> => {
	const result = await getTodo();
	console.log(result);
};

getTodoData();

// npx ts-node-dev --respawn ./src/advance/asynchronous.ts
