"use strict";
var Car = (function () {
    function Car(engine) {
        this.engine = engine;
        //this.engine = engine;
    }
    Car.prototype.speedUp = function (speed) {
        return this.speed++;
    };
    return Car;
}());
exports.Car = Car;
