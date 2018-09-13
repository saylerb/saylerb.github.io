---
path: "/event-delegation" 
title: "What is Event Delegation?"
date: "2018-09-11" 
published: false 
---

### What is event bubbling? Event capture?

### How does this tie into event delegation?

Event delegation is one way we can take advantage of the way that the browser
handles event bubbling. Let's say when you click on an individual element in a
list, we want to display the text of the element clicked in a message paragraph 
tag.

```html
<p id="message">Here is a message</p>

<ul id="list">
  <li>Hi there</li>
  <li>Hello</li>
  <li>Hello again</li>
</ul>
```

We could add 3 separate event listeners to each item in the list. However, this
can become cumbersome, and imagine our list may grow in the future, or we load
items dynamically from a database. We would need to loop through all the items
in the list and add an event listener to every one.

Taking advantage of how the browser handles event bubbling, you can get the
same behavior by adding a single event handler on a common ancestor, which can
listen to events that bubble up from its children:

```js
   const messageElement = document.querySelector("#message");
   document.querySelector('#list')
     .addEventListener("click", event => messageElement.innerText = event.target.innerText);
```

Reducing the number of event listeners in your code is a good practice.

### Further reading

* [MDN - Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
* [How JavaScript Event Delegation Works](https://davidwalsh.name/event-delegate)
