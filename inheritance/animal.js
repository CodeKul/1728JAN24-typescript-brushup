"use strict";
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.walk = function () {
        this.legs++;
    };
    return Animal;
}());
exports.Animal = Animal;
