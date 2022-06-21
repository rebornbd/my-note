# Lists and Keys

#### helping functions
```js
// items.js
export const ITEMS = [
  "Book",
  "TShirt",
  "Bike",
  "PC",
  "Laptop"
];

// Item.js
import React from "react";
const Item = ({ item="" }) => {
  return (
    <div>
      <span>{item.toLocaleUpperCase()}</span>
    </div>
  )
}
export default Item;
```

## Class component
#### `ListItem.js`
```js
import React from 'react';
import Item from './Item';
import { ITEMS } from './items';


export default class ListItem extends React.Component {
  render() {
    return (
      <div className="p-5 border">
        <h2>Class component</h2>
        {ITEMS && ITEMS.map(item => (
          <Item item={item} key={item} />
        ))}
      </div>
    )
  }
}
```


## Functional component
#### `ListItemFn.js`
```js
import React from 'react';
import Item from './Item';
import { ITEMS } from './items';


const ListItemFn = () => {
  return (
    <div className="p-5 border">
      <h2>Functional component</h2>
      {ITEMS && ITEMS.map(item => (
        <Item item={item} key={item} />
      ))}
    </div>
  )
}

export default ListItemFn;
```
