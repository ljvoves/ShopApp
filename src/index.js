import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class ShopApp extends Component {
  render() {
    return (
      <h1>Hi son.</h1>
    );
  }
}


const rootElement = document.getElementById('root');

ReactDOM.render( <ShopApp />, rootElement )
