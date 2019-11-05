import React, { Component } from 'react';
import ListItems from './ListItems';
// trash bin icon for ToDo deletion
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    // binding the methods
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  // methods
  handleInput(event) {
    this.setState({
      currentItem: {
        text: event.target.value,
        // unique identifier for each item added to ToDo
        key: Date.now()
      }
    })
  }

  addItem(event) {
    // prevent the page to refresh, default behaviour of elements
    event.preventDefault();
    const newItem = this.state.currentItem;
    // console.log(newItem);
    if (newItem.text !== '') {
      // inserting new item into the array of items
      const newItems=[...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className='main'>
        <header>
          <form id='to-do-form' onSubmit={this.addItem}>
            <h1>E hana</h1>
            <input type='text' placeholder='what should you do?'
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button type='submit'>add</button>
          </form>
        </header>
        <ListItems items={this.state.items} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default App;