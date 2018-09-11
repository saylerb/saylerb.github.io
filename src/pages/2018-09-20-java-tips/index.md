---
path: "/java-tips"
title: "Java Tips"
date: "2018-09-20"
published: false
---

### Flip the comparison to avoid those pesky NPE's

```java
String userInput = null;

System.out.println(userInput.equals("valid input")); // java.lang.NullPointerException grrrr!
System.out.println("valid input".equals(userInput)): // false  ahh, much better
```

### Use a set to remove duplicates or compare two collections ignoring order


### If you want an ordered map, you need to use a SortedMap.
