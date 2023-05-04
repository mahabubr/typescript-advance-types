"use strict";
let amni;
amni = "New Level Web Development";
amni.toLocaleLowerCase();
amni.toLocaleLowerCase();
function kgToGram(param) {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `The Value Of ${value}`;
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return value;
    }
}
const resultToBeNumber = kgToGram(200);
const resultToBeString = kgToGram("300");
try {
}
catch (e) {
    console.log(e.message);
}
