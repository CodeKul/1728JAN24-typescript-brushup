"use strict";
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.walk = function () {
        console.log("Animal is walking");
        this.legs++;
    };
    return Animal;
}());
exports.Animal = Animal;
