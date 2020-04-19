console.log(' [ Data types ]');

console.log(typeof 'hell world');
console.log(typeof 1);
console.log(typeof false);
console.log(typeof 42n);
console.log(typeof Symbol());
console.log(typeof null);
console.log(typeof undefined);

// mutating an object with a function
const obj = { a: 1 };

function mutateObj(obj) {
  obj.a = 2;
}

// here we are passing ref of obj to the function
mutateObj(obj);

console.log(obj);

// but in case of primitive data types - we pass value of that variable
let num = 1;

function mutatePrimitive(num) {
  num++;
  // or num = num + 1
  console.log('mutate value : ', num);
}

// here we pass variables value
mutatePrimitive(num);

console.log('orginal value : ', num);
