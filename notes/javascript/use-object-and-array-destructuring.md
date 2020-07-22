---
title: Use object and array destructuring
tags:
  - javascript
---

## Object destructuring

Use object destructuring when accessing and using multiple properties of an object. 

Time to write some facy code.

```js
// bad
function getFullName(employee) {
  const firstName = employee.firstName;
  const lastName = employee.lastName;

  return `${firstName} ${lastName}`;
}

// good
function getFullName(employee) {
  const { firstName, lastName } = employee;
  return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
```

## Array destructuring

```js
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];
const forth = arr[3]

// good
const [first, second, ,forth] = arr;
```