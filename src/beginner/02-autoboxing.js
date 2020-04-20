console.log(' [ autoboxing in js] ');

/**
 * As we know - primitive data types doest not method or properties
 */
const str = 'hello';

// Q. how are we able to add .method() properties ?
console.log(str.length); // String.prototype

// autoboxing happens automatically when we try to use primitive data types as an object and with that object - js will connect to built in prototype of these primitive data types
console.log((10).toString()); // Number.prototype
console.log(true.valueOf()); // Boolean.prototype
