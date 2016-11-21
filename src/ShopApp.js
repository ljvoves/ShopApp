import React, {Component} from 'react'
import ItemForm from './ItemForm'

class ShopApp extends Component {
  constructor(props) {
      super(props)
        this.state = {
          items: [
          {
            name: "Screwdriver",
            color: "Black",
            size: "5",
            price: 30
          },
          {
            name: "Hammer",
            color: "Yellow",
            size: "Large",
            price: 300
          },
          {
            name: "Television",
            color: "Black",
            size: "75\"",
            price: 950
          },
          {
            name: "Sandpaper",
            color: "n/a",
            size: "600 Grit",
            price: 7
          },
          {
            name: "iPad",
            color: "Space Gray",
            size: "12\"",
            price: 800
          }
        ]
      };
    }

    addAnItem = (item) => {
      this.setState({items: [...this.state.items, item]})
    }


  render() {
    console.log('This is the initial state', this.state);
    return (
      <div>
        <ItemForm onItemFormSubmit={this.addAnItem}/>
        {this.state.items.map((item) => {
          return (
            <div>
              <p>{item.name}</p>
              <p>{item.color}</p>
              <p>{item.size}</p>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>
    );
  }
}


export default ShopApp;
