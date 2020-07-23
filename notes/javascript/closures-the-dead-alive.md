---
title: Closures - the dead alive!!
tags:
  - javascript
---

## Closure is a pattern

Closure is an important javascript pattern to give private access to a variable. 

A closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

For below example, `createGreeter` returns an anonymous function that has access to the supplied `greeting`, “Hello.” For all future uses, `sayHello` will have access to this `greeting`!

```js
function createGreeter(greeting) {
    return function(name) {
        console.log(greeting + ', ' + name);
    };
}

const sayHello = createGreeter('Hello');

sayHello('Joe');
// Hello, Joe
```

## Private variable

This lets us do some interesting things, such as defining "private" variables that are visible only to a specific function or set of functions. A contrived (but popular) example:

```js
function makeCounter() {
    var counter = 0;

    return {
        value: function () {
            return counter;
        },
        increment: function () {
            counter++;
        }
    };
}

var a = makeCounter();
var b = makeCounter();

a.increment();

console.log(a.value()); // 1
console.log(b.value()); // 0
```


## Real world example

In a more real-world scenario, you could envision an initial function `apiConnect(apiKey)` that returns some methods that would use the API key. 

In this case, the apiKey would just need to be provided __once and never again__.

```js
function apiConnect(apiKey) {
    function get(route) {
        return fetch(`${route}?key=${apiKey}`);
    }

    function post(route, params) {
        return fetch(route, {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        });
    }

    return { get, post };
}

const api = apiConnect('my-secret-key');

// No need to include the apiKey anymore
api.get('http://www.example.com/get-endpoint');
api.post('http://www.example.com/post-endpoint', { name: 'Joe' });
```