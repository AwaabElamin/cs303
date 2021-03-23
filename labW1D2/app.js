/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// See tests.js for behavior
function nameString(obj) {
    let result;
    if (obj === null) return "null argument";
    if (obj === undefined) return "no object passed";
    if (Object.keys(obj).length === 0) return "object has no properties";
    if (Object.keys(obj).length === 1) {
        for (const key in obj) return key;
    }
    result = "";
    for (const key in obj) {
        result += key;
    }
    return result.split("").sort().join(".");
}
console.log(nameString({a:5, z:6, m:8}));