---
path: "/java-spring-basics"
title: "Java Spring Basics"
date: "2018-09-29"
published: false
---

# Inversion of control

Inversion of control and dependency injection are fancy terms for the same
thing. Basically, instead of instantiating objects within classes, you have
some outside thing manage the creation of objects, and then inject the
dependencies into objects for you. From the Spring docs: "Dependenices are only
defined in constructor arguments, arguments to a factory method, or properties
set on the object after it is instantiated.

# Java Bean

What the hell is a Java Bean? For the longest time I was confused on this,
and its silly because a cute name like Bean is really just that. A Bean is
simply a Java Class. Technically a Bean has two simple requirements:

1. A no-arg constructor, and 2) getters and setters on its fields.
