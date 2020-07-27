---
title: *args and **kwargs - packing and unpacking arguments
tags:
  - python
---

## Packing and Unpacking arguments

We use two operators `*` for tuples, lists and `**` for dictionaries.

### Unpacking arguments

We can use `*` to unpack the list so that all elements of it can be passed as different parameters.

```python
# Function that takes 4 arguments and prints them 
def fun(a, b, c, d): 
    print(a, b, c, d) 
  
my_list = [1, 2, 3, 4] 
  
# Unpacking list into four arguments 
fun(*my_list)
# (1, 2, 3, 4)
```

For dictionary we will use `**`

```python
# Unpacking of dictionary items using ** 
def fun(a, b, c): 
    print(a, b, c) 
  
# A call with unpacking of dictionary 
d = {'a':2, 'b':4, 'c':10} 
fun(**d) 
# 2 4 10
```

### Packing arguments
When we don’t know how many arguments need to be passed to a python function, we can use `*` to pack all arguments in a tuple.

```python
# This function uses packing to sum 
# unknown number of arguments 
def mySum(*args): 
    sum = 0
    for i in range(0, len(args)): 
        sum = sum + args[i] 
    return sum 
  
print(mySum(1, 2, 3, 4, 5)) 
print(mySum(10, 20)) 
# 15
# 30
```

For dictionary we will use `**`

```python
# Packing of dictionary items using ** 
def fun(**kwargs): 
    for key in kwargs: 
        print("%s = %s" % (key, kwargs[key])) 

fun(name="geeks", ID="101", language="Python")
# language = Python
# name = geeks
# ID = 101
```

## *args and **kwargs

These utilizes arguments __unpacking__

*args and **kwargs are mostly used in function definitions. You could have also written *var and **vars. Writing *args and **kwargs is just a convention.

*args and **kwargs allow you to pass a variable number of arguments to a function.

## Usage of *args
*args is used to send a __non-keyworded__ variable length argument list to the function.

Here’s an example to help you get a clear idea:

```python
def test_var_args(f_arg, *argv):
    print("first normal arg:", f_arg)
    for arg in argv:
        print("another arg through *argv:", arg)

test_var_args('yasoob', 'python', 'eggs', 'test')

# first normal arg: yasoob
# another arg through *argv: python
# another arg through *argv: eggs
# another arg through *argv: test
```
I hope this cleared away any confusion that you had.

## Usage of **kwargs
**kwargs allows you to pass __keyworded__ variable length of arguments to a function. You should use **kwargs if you want to handle named arguments in a function. 

Here is an example to get you going with it:

```python
def greet_me(**kwargs):
    for key, value in kwargs.items():
        print("{0} = {1}".format(key, value))

greet_me(name="yasoob", age=21)
# name = yasoob
# age = 21
```

This is just the basics of **kwargs and you can see how useful it is.

## Using *args and **kwargs 
Now that you have learned what `*args` and `**kwargs` are for, you are ready to start writing functions that take a varying number of input arguments. 

But what if you want to create a function that takes a changeable number of both positional and named arguments?

In this case, you have to bear in mind that __order matters__. Just as non-default arguments have to precede default arguments, so `*args` must come before `**kwargs`.

To recap, the correct order for your parameters is:

- Standard arguments
- *args arguments
- **kwargs arguments

```python
# correct_function_definition.py
def my_function(a, b, *args, **kwargs):
    pass
```
