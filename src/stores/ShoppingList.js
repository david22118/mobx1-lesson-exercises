import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    // your code here
  @observable list = [];
  @observable length;
   @action checkItem = (name) => {
       debugger
      let item= this.list.find(l=>l.name==name)
      item.completed=!item.completed
    }
    @action addItem = (name) => {
       this.list.push(new Item(name)) 
    }
    @action editItem = (name,newLocation) => {
      let item = this.list.find(l=>l.name==name)
      item.location=newLocation
    }
    @action deleteItem = (name) => {
      let index=this.list.findIndex(l=>l.name==name)
      this.list.splice(index,1)

    } 
}

