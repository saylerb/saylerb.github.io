---
path: "/basic-react-testing"
title: "Basic React Testing"
date: "2018-10-28"
published: false
---

What's the simpliest way to write a test?

```javascript
import React from "react";

function ItemList({ items }) {
  return items.length ? (
    <ul>
      {items.map(i => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  ) : (
    "no items"
  );
}

export default ItemList;
```

```javascript
test("renders an empty list", () => {
  const container = document.createElement("div");
  const itemListElement = React.createElement(ItemList, { items: [] });

  ReactDOM.render(itemListElement, container); // render the component to container

  expect(container.textContent).toMatch("no items");
});
```
