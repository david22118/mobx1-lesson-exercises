import React, { Component } from 'react';
import { observer } from 'mobx-react'
import '../App.css';
@observer
class Item extends Component {
    checkItem = (e) => {
        //your code here
        debugger
        const name = e.target.value
        this.props.groceryList.checkItem(name)
      }
      editItem = () => {
        const location =  prompt("please enter new location")
        const name =this.props.name
        this.props.groceryList.editItem(name,location) 
      }
      deleteItem = () => {
        //your code here
        this.props.groceryList.deleteItem(this.props.name)
      }
    render() {
        return (
            <div className = "checkbox">
              <input type="checkbox" onClick={this.checkItem} value={this.props.name} />
              {this.props.completed?<label className="true">{this.props.name} {this.props.location} </label>:<label className="false">{this.props.name} {this.props.location}</label>}
              <span> <button className="editButton"  onClick={this.editItem}  >  EditItem</button>
              <button className="deleteItem" onClick={this.deleteItem}>RemoveItem</button></span>
            
      {/*   your code here
            each item should be in an input checkbox
            it should display the item name and location
            it should have both an edit button and a delete button
      */} 
            </div>)
    }
}

export default Item