import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function ListItems(props) {
  const items = props.items;
  const listItems = items.map(item => {
    return <div className='item' key={item.key}>
      <p>
        {item.text}
        <span>
          <FontAwesomeIcon className='faicons' icon='trash'
            onClick={() => props.deleteItem(item.key)}
          />
        </span>
      </p>
      
    </div>
  })
  return (
    <div>
      <FlipMove duration={300} easing='ease-in-out'>  
        {listItems}
      </FlipMove>
    </div>
  )
}

export default ListItems;