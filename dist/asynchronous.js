"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Mocking
const makePromise = () => {
    return new Promise((resolved, reject) => {
        const data = "data is fetch";
        if (data) {
            resolved(data);
        }
        else {
            reject("Failed To Fetch");
        }
    });
};
const getPromise = () => __awaiter(void 0, void 0, void 0, function* () {
    const result10 = yield makePromise();
    return result10;
});
const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
    return yield response.json();
});
const getTodoData = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield getTodo();
    console.log(result);
});
getTodoData();
// npx ts-node-dev --respawn ./src/advance/asynchronous.ts
