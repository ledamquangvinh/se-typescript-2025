"use strict";
let isDone = false;
console.log(`isDone = ${isDone} - ${typeof (isDone)}`);
let decimal = 6;
let hex = 0xf0000d;
let bin = 0b101010;
let octal = 0o744;
console.log(`Decimal = ${decimal} - ${typeof (decimal)}`);
console.log(`Hex     = ${hex} - ${typeof (hex)}`);
console.log(`Bin     = ${bin} - ${typeof (bin)}`);
console.log(`Octal   = ${octal} - ${typeof (octal)}`);
let big = 100n;
console.log(`Big int = ${big} - ${typeof (big)}`);
let color = 'light blue';
color = 'dark red';
console.log(`Color   = ${color} - ${typeof (color)}`);
let fullName = `Mr Buoi`;
let age = 37;
let sentence = "Hello, my name is " +
    fullName +
    ".\n\n" +
    "I'll be " +
    (age + 1) +
    " years old next month.";
console.log(`Sentencd = ${sentence} - ${typeof (sentence)}`);
//# sourceMappingURL=lab01.syntax.data_type.js.map