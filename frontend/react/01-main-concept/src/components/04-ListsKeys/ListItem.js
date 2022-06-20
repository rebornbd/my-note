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
