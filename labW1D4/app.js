/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// Remove the even characters from string, e.g removeEvenCharacters("abcd") === "bd"
function removeEvenCharacters(string) {
	if (typeof string === "undefined") {
		return "missing argument";
	}
	if (typeof string !== "string") {
		return "argument not string";
	}
	if (string.length === 0) {
		return "";
	}
	let result = string[1];
	for (let i = 3; i < string.length; i += 2) {
		result += string[i];
	}
	return result;

}

// Sum the numbers that are greater than zero of array, e.g. 
//sumPositiveNumbers([-1,4,5,-2,-3,10]) === 19
// Must use the reduce method of the Array object to do this!!!
function sumPositiveNumbers(array) {
	// without reduce
	//let sum = 0;
	// for (const number  of array.filter((num) =>  num > 0)) {
	// 	sum += number;
	// }
	
	//using reduce
	return array.reduce((sum, number) => {
		//by Ternary operator
		return (number >0) ? sum + number: sum;

		// or :
		// if (number > 0) {
		// 	return sum + number;
		// } else {
		// 	return sum;
		// }
	},0);
}

// Write a construction function
// Input an array containing numbers and string, e.g. [1, "a", "c", 2, 4]
// Creates an object with two array properties numbers and strings, e.g.
// new ArrayDemo([1, "a", "c", 2, 4]) returns {numbers:[1, 2, 4]; strings:["a", "c"}
function ArrayDemo(array) {
	function numberFilter(item) {
		return typeof item == "number";
	}
	function stringFilter(item) {
		return typeof item == "string";
	}
	this.numbers = array.filter(numberFilter);
	this.strings = array.filter(stringFilter);
}

// Makes all negative numbers of the input array positive
function makePositive(array) {
	//return array.map(Math.abs);
	let result = [];
	for (const item of array) {
		if (typeof item === "number") {
			result.push(Math.abs(item));
		} else {
			result.push(item);
		}
	}
	return result;
}

// Replaces sequences of 0s with an "*", e.g.
// removeZeros([3, 0, 0, 0, 5, 6, 0, 0, 7, 0]) returns [3, "*", 5, "*", 7, "*"];
function removeZeros(array) {
	let result = [];
	for (const element of array) {
		if (element === 0) {
			if (result.lastIndexOf("*") !== result.length - 1) {
				result.push("*");
			}
		} else {
			result.push(element);
		}

	}
	return result;
}




