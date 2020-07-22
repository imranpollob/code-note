---
title: Use object property and method shorthand
tags:
  - javascript
---

ES6 provides a cleaner form of defining object literal methods and properties. 
If object `key and value name is same` than we we simple put the key only.

Also, group your shorthand properties at the beginning of your object declaration. 

This syntax can make defining complex object literals much easier and more maintainable.

```js
//bad (ES5 syntax)
let obj = {
  // properties
  batman:batman,
  superman:superman,
  
  // methods
  fight:function(){}
}

//good (ES6 Syntax)
let obj = {
  // properties
  batman,
  superman,
  
  // methods
  fight(){}
}
```