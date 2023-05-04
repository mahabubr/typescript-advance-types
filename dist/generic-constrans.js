"use strict";
const myInfo1 = {
    name: "Parsian",
    age: 100,
    salary: 150000,
    other1: false,
    other2: null,
};
const addMeToMyCrushMind1 = (myInfo) => {
    const crush = "Kane Winslate";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const result8 = addMeToMyCrushMind1(myInfo1);
result8.age;
