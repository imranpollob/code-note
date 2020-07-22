---
title: Use let and const instead of var to assign variable
tags:
  - javascript
---

## Scope matters
`let` and `const` have block scope while `var` has function scope which could lead to some bugs in your code.

```js
// bad
{
  var result = 1;
}
console.log(result) // 1

// good, use the let.
{
  let result = 1;
}
console.log(result) // Reference Error
```

## Use const instead of let when you don't have to reassign values

> If a variable is never reassigned, using the const declaration is better. The const declaration tells readers, "this variable is never reassigned," reducing cognitive load and improving maintainability. - Eslint

```js
//bad
let baseUrl = 'https://test.com/'

//good
const baseUrl = 'https://test.com/'
```

## Stay away from creating global scope variable

Always use const or let to declare variables. Not doing so will result in variables declared in the global scope and polluting global namespace.

```js
// bad
fox = new Animal();
window.fox // animal (if browser environment)

// good
const fox = new Animal();
window.fox // undefined (if browser environment)
```

## Don’t chain variable assignments

During chaining of variable assignments, implicit global variables are created which results in polluting the global namespace.

```js
// bad
(function example() {
  let x = y = z = 1;
  // JavaScript interprets this as
  // let x = ( y = ( z = 1 ) );
  // The let keyword only applies to variable x, variables y and z become
  // global variables and thus polluting global namespace.
}());

console.log(x); // throws ReferenceError
console.log(y); // 1
console.log(y); // 1

// good
(function example() {
  let x = 1;
  let y = x;
  let z = y;
}());

console.log(x); // throws ReferenceError
console.log(y); // throws ReferenceError
console.log(z); // throws ReferenceError
```

