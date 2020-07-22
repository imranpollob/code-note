---
title: Avoid chain variable assignments in JavaScript
tags:
  - javascript
---

Chaining variable assignments may seem fancy but have unintended consequences associated with it. During chaining of variable assignments, implicit global variables are created which results in polluting the global namespace.

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
