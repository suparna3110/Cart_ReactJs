import React, { Component } from "react";
import { Navbar, NavItem} from 'reactstrap';
import "./App.css";
import Cart from "./cart.jpg";

import Item from "./Components/item";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: [{ id: 1}, { id: 2}, { id: 3}, {id: 4}],
      totalItems:0
    };
  }
  // componentDidMount(){
  //   this.totalItems=0
  // }
 
  handleDelete = id => {
    let newitems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: newitems });
  };

  totalItems = (titems) => {
    console.log(titems,"hey");
    this.setState({totalItems: this.state.totalItems + titems})
    if (this.state.totalItems<=0){
      this.state.totalItems=0;
    }
  }

  render(){
    return(
      <div>
        <Navbar color="secondary" className="nav"> 
          <NavItem className="text">Counter</NavItem>
          <NavItem className="icon">
            <img
              src={Cart}
              alt="Cart"
              width="80"
              height="60"
            />
          </NavItem>
          <NavItem className="item">
            {this.state.totalItems}
          </NavItem>
        </Navbar>
        {this.state.items.map(item => ( 
          <Item
            key={item.id}
            onDelete={this.handleDelete}
            id={item.id}
            totalItems={this.totalItems}
          />
        ))}
      </div>
    );
  }

 
}
export default App;
