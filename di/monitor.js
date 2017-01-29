var Monitor = (()=> {
    'use strict';

    let ret = {
        width : 100,
        height : 800,
        thirdMod : (()=>{})()
    }; // Object Literal Notation
    return ret;
})(); // module


var Desktop = ((moni)=>{
    console.log(`width is ${moni.width}`)
})(Monitor);