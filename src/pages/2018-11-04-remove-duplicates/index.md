---
path: "/remove-duplicates"
title: "Removing duplicates from a string"
date: "2018-11-04"
published: true
---

I was working on a simple exercise to determine if a word is an isogram, which
means that the word does not have any repeating characters.

For example, "flashpoint" is an isogram, but "eleven" is not (it has 3 e's).

I originally planned to count all the occurrences of each letter, but then I
thought I actually don't need to capture all the information just to determine
if there are repeating letters.

One way to easily de-duplicate a piece of data is to take advantage of a Set,
which is an unordered collection that cannot have duplicates. By taking a
collection with duplicates and putting it into a set, we can remove the
duplicates and then compare lengths of the collections to determine if the
original word had duplicates.

```java
import java.util.Arrays;
import java.util.Set;
import java.util.stream.Collectors;

class IsogramChecker {

    boolean isIsogram(String phrase) {
        if (phrase.isEmpty()) {
            return true;
        }

        String lowerCaseNoDelimiters = phrase.toLowerCase().replaceAll("-|\\s", "");
        String[] characters = lowerCaseNoDelimiters.split("");
        Set<String> set = Arrays.stream(characters).collect(Collectors.toSet());

        return set.size() == lowerCaseNoDelimiters.length();
    }

}
```

One thing that Java surprised me with: splitting an empty string on an empty string `""` returns an non-empty array (`[""]`)! According to [this StackOverflow post](https://stackoverflow.com/a/37796531/5252217), this corner case was explained in the Java documentation at some point, but I could not find it in my Javadoc:

    (Note that the case where the input is itself an empty string is special,
    as described above, and the limit parameter does not apply there.)

Here, I'm not specifying a limit as the second parameter on `split()` invocation, since it doesn't actually get applied when splitting empty strings.

My solution to this edge case was to just early return out of the function if an empty string is passed in.

Check out [this solution on exercism.com](https://exercism.io/tracks/java/exercises/isogram/solutions/3ab1869f32ae41b8bc3e8eb99c0a94ce)

### Further reading

- [Oracle - Collectors.toSet()](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collectors.html#toSet--)
- [Oracle - String.replaceAll](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html#replaceAll-java.lang.String-java.lang.String-)

- [StackOverflow - Splitting an empty string](https://stackoverflow.com/a/37796531/5252217)
