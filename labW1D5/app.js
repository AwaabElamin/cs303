/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

function countSubstring(s, target) {
    if (!s.includes(target)) {
        return 0;
    }
    let index = s.indexOf(target);
    let temp = s.substring(index + 3);
    return 1 + countSubstring(temp, target);
}

// Save obj in localStorage (use localStorage)
function saveInLocalStorage(name, obj) {
    localStorage.setItem(name, JSON.stringify(obj));
}

// Return value of name in local storage
function getFromLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name));
}

// This function has an unbounded this. When it is called, the this will be bound to some object
// The argument "obj" is a single key/value pair, e.g. {location:"Fairfield"}
// It can be any key/value pair
// addMissProperty tests the object bound to its "this" for the key of "obj" (e.g., location)
// If the bound object doesn't have that key then the key and its value is added to the bound 
// object.
function addMissingProperty(obj) {
    let key = Object.keys(obj);
    for (const element of key) {
        if (!this.hasOwnProperty(element)) {
            this[key] = obj[key];
        }       
    }
   

}

// Constructor function which creates object {name:name, country:country, creationData:...}
// Where creationDate is the time that the object is created.
function Person(name, country) {
    let obj = {name: name, country: country, creationDate: new Date()};
    return obj;
}


// The parameter "students" is an array of student objects. Each student object has form
// {name:some name, country: some country}
// This function creates a Map using the "students" parameter and sets the value of each student
// in it to zero. This will be the number of classes that the student has missed.
// The function incrementAbscences (see next) can be called to increment the number of absences.
function register(students) {
    let map = new Map();
    for (const student of students) {
        map.set(student,0);
    }
    return map;
}

// Parameters:
// course is a Map mapping student objects to an integer which is the number of days missed
// student is an object that can be used as a key to course.
// This function increments the number of days missed for the student.
function incrementAbsences(course, student) {
    let value = course.get(student);
    course.set(student,++value);
}


