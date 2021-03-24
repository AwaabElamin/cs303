/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

/*
Function analyzer
Has an unbound this
Creates an object that contains the following information from the "this" object.
{
	numProperties  	// number of properties
	cntShortName	// count of property names shorter than 3 characters
	cntReferences	// count of reference properties (use the typeof operator to compute this)
}	
*/
function analyzer() {
	let keys = Object.keys(this) ;
	let countPropertiesLessThan3 = 0;
	let countRefrence =0;
	for (const key of keys) {
		if(key.length < 3) countPropertiesLessThan3++;
	}
	for (const prop in this) {
		if(typeof(this[prop]) === "object") countRefrence++;
	}
	return { numProperties : Object.keys(this).length
		,cntShortName: countPropertiesLessThan3, cntReference: countRefrence};
}

/* Constructor for a person object
	Person(name, country, grades) creates object
	{
		name: name,  // person's name
		county: country, // person's country
		grades: grades,  // integer array of grades
		computeGrade     // function that computes the grade from grades
	}
*/
function Person(name, country, grades) {
	this.name = name;
	this.country = country;
	this.grades = grades;
	this.computeGrade = () => {
		let sum = 0;
		for (let i = 0; i < grades.length; i++) {
			sum += grades[i];
		}
		return sum / grades.length;
	};
}
