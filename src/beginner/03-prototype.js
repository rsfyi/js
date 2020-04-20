console.log('[ Prototype ]');

const a = {};

// js add __proto__(dunder proto) to object a
console.log(a); // a: { __proto__: Object(by default)}

// Q. how this even works when a is empty object?
console.log(a.toString());
// js first tries to find the toString() on object a, if not found - it will go to __proto__ to find if that method is available.
