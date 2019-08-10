---
path: "/java-string-comparison"
title: "Java String Comparison"
date: "2018-09-06"
published: true
---

You usually don't want to compare strings using the `==` operator. [This
StackOverflow
post](https://stackoverflow.com/questions/767372/string-equals-versus/767379#767379)
provides a good explaination. TR;DR is that sometimes the `==` will return what
you expect, but not always.

```java
String helloOne = "Hello, World!";

String helloTwo = "Hello";
helloTwo += ", World!";

System.out.println(helloOne); // "Hello, World!"
System.out.println(helloTwo); // "Hello, World!"
System.out.println(helloOne == helloTwo); // false
System.out.println(helloOne.equals(helloTwo)); // true
```

If both strings were initialized as string literals (i.e. they are surrounded
by `"`), then the comparsion with `==` will work. This is because the Java
compiler will represent those strings as the same object in memory. So when in
doubt, it's a good idea to use `equals` to do string comparison.
