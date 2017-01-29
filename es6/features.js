"use strict";

let i = 10

if(true) {
    let i = 20
}

console.log('I is -'+i)
console.log(`i is ${i}`)

function beforeES6() {
    console.log(`I am normal`)
}

let after = function () {
    console.log(`unnamed function`)
}

after();

let lambda = () => console.log(`fat arrow`)
lambda()




