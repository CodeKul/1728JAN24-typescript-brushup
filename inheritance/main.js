"use strict";
var tiger_1 = require('./tiger');
var animal_1 = require('./animal');
var animal = new animal_1.Animal();
animal.walk();
var tiger = new tiger_1.Tiger();
tiger.walk();
console.log("\n    Is Bengol tiger " + tiger.isBengol() + "\n");
var animalTiger = new tiger_1.Tiger();
