let osName : string = 'android';
console.log(`Os Name is ${osName}`);

function whatIsOs() : string {
    return osName;
}

function thisIsVersion(version : number) {
    console.log(`Os Version is ${version}`);
}
console.log(`How to compile -> tsc yourFile.ts`);
console.log(`How to Run -> node yourFile.js`);
console.log(`How to Run -> node yourFile.js`);
whatIsOs();
thisIsVersion(2);