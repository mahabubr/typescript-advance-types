"use strict";
const createArray = (param) => {
    return [param];
};
const createArray1 = (param1, param2) => {
    return [param1, param2];
};
function createArray2(param1, param2) {
    return [param1, param2];
}
const result = createArray("Bangladesh");
const result2 = createArray(true);
const result3 = createArray({ name: "BD" });
const result4 = createArray1("Bangladesh", "I Love My Country");
const result5 = createArray1(true, ["USA"]);
const result6 = createArray1({ name: "BD" }, false);
// Spread Operator
const crush = "Kane Winslate";
const myInfo = {
    name: "Parsian",
    age: 100,
    salary: 150000,
};
const newData = Object.assign(Object.assign({}, myInfo), { crush });
const addMeToMyCrushMind = (myInfo) => {
    const crush = "Kane Winslate";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const result7 = addMeToMyCrushMind(myInfo);
result7.age;
