import React, { Component } from 'react'

class ItemForm extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const itemFormValues = {};
    itemFormValues.name = this.refs.name.value;
    itemFormValues.color = this.refs.color.value;
    itemFormValues.size = this.refs.size.value;
    itemFormValues.price = this.refs.size.value;

    console.log(itemFormValues);
    console.log(this.props.onItemFormSubmit);

    this.props.onItemFormSubmit(itemFormValues);

    this.refs.name.value = '';
    this.refs.color.value = '';
    this.refs.size.value = '';
    this.refs.price.value = 0;
  }

  render() {
    //name, color, size, price
    return(
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <input type="text" ref="name" />
        <input type="text" ref="color" />
        <input type="text" ref="size" />
        <input type="number" ref="price" />
        <input type="submit" />
      </form>
    )
  }
}


export default ItemForm;
