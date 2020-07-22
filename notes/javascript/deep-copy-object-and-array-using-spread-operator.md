---
title: Deep copy object and array using spread operator
tags:
  - javascript
---

## What is swallow copy vs deep copy?

A __deep copy__ means that all of the values of the new variable are copied and __disconnected__ from the original variable. 

A __shallow copy__ means that certain (sub-)values are still __connected__ to the original variable.

## When swallow copy is created?

To really understand copying, you have to get into how JavaScript stores values.

### Primitive data types:
-  Number — e.g. 1
-  String — e.g. 'Hello'
-  Boolean — e.g. true
-  undefined
-  null

When you create these values, they are tightly coupled with the variable they are assigned to. They only exist once. 

That means you do not really have to worry about copying primitive data types in JavaScript. When you make a copy, it will be a real copy.

```js
let a = 5

let b = a // this is the copy

b = 6

console.log(b) // 6
console.log(a) // 5
```

### Composite data types:
— Object
- Array

Technically, arrays are also objects, so they behave in the same way. These values are actually stored just once when instantiated, and assigning a variable just creates a `pointer (reference)` to that value.

Now, if we make a copy `b = a` , and change some nested value in `b`, it actually changes `a`’s nested value as well 🤯

Why? Because `a` and `b` actually point to the same `reference`. It's called __swallow copy__.

```js
let a = { name: 'Pollob' }
let b = a

console.log(b) // { name: 'Pollob' }

b.name = "Something .."

console.log(a) // { name: 'Something ..' }
```

## Deep copy to rescue

### Deep copy object

```js
// bad
const old = { a: 1, b: 2 };
const copy = Object.assign({}, old); // copy => { a: 1, b: 2 }
// adding additional value
const copy = Object.assign({}, old, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }


// good
const old = { a: 1, b: 2 };
const copy = { ...old }; // copy => { a: 1, b: 2 }
// adding additional value
const copy = { ...old, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...args } = copy; // args => { b: 2, c: 3 }
```

### Deep copy array

```js
// bad
const items = [1,2,3,4,5]
const len = items.length;
let itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}

// bad
itemsCopy = items.slice();

// bad
itemsCopy = new Array(items)

// good
const itemsCopy = [...items];
```

