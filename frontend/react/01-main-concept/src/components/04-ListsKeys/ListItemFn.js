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
