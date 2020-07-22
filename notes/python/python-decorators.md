---
title: Python decorator
tags:
  - python
---

## What is a decorator?

A decorator is a function that takes a function and extends its functionality without modifying it explicitly 🤯

Simply giving a function some super powers.

## Decorator example

```py
def my_decorator(func):
    def wrapper():
        print("First")
        func()
        print("Last")
    return wrapper

@my_decorator
def say_hello():
    print("Hello I am line Number 2")

say_hello()
# First
# Hello I am line Number 2
# Last
```

## Understand how decorator works

```py
def my_decorator(func):
    def wrapper():
        print("First")
        func()
        print("Last")
    return wrapper

def say_hello():
    print("Hello I am line Number 2")
```

Here,

- We declare a decorator function and it takes a **function as argument**.
- Inside that, we write a **wrapper function** where operations are carried out and return the **wrapper function** itself.

```py
say_hello_with_decorator = my_decorator(say_hello)
say_hello_with_decorator()

# First
# Hello I am line Number 2
# Last
```

## Uses of decorator
- Setup logger
- Setup configuration
- Setup Error catching
- Extending common functionality for all function and classes
