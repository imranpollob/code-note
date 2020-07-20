---
title: Lambda function
tags:
  - python
---

## What is a lambda function?

Lambda function is like __anonymous function__ is other programming languages. It's basically a inline function that has no name. You can say function oneliner 😎

```py
add = lambda x, y: x + y

print(add(5, 2))
```

The example above takes two arguments x and y and immediately returns the result of x + y.

## Different Usecaes

Lambda functions are used where a __single line function__ is sufficient to do the job.

Like the `sort` as below

```py
sort_by_2nd_value = [(4, 20), (2, 1), (5, 10), (1, 3)]

sort_by_2nd_value.sort(key=lambda x: x[1])

print(sort_by_2nd_value)
```

Can be used in `map`, `filter` and `reduce`

```py
print(sort_by_2nd_value)

from functools import reduce

print(reduce(lambda x, y: x + y, [1, 1, 1, 1, 1]))
```
