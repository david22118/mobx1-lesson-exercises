import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './App.css';
import Item from './components/Item';


@observer
class App extends Component {
  constructor(){
    super()
    this.state={
      newItem:"",
    }
  }
  handleChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }
  reset=()=>{
    const item = ''
    this.setState({
      newItem:item
    })
  }
  addItem = () => {
    this.props.groceryList.addItem(this.state.newItem)
    this.reset()
  }
  render() {
    const groceryList=this.props.groceryList
    return (
      <div className="App">
        <input value={this.state.newItem} onChange = {this.handleChange}/>
        <button onClick = {this.addItem}>Add</button>
    {groceryList.list.map(g=> <Item groceryList={this.props.groceryList} completed={g.completed} name={g.name} location={g.location}  />)}
      {/* your code here
          You should map each grocery item into an Item component  
      */}  
      </div>
    );
  }
}

export default App;
