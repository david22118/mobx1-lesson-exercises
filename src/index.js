import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Item } from '../src/stores/Item'
import { ShoppingList } from '../src/stores/ShoppingList'


 let potatoes = new Item("Potatoes")
 let corn = new Item("corn")
 let sombreros= new Item("sombreros")
 let groceryList = new ShoppingList()
 groceryList.list.push(potatoes)
 groceryList.list.push(corn)
 groceryList.list.push(sombreros)
 

// Use the prop "store" for your store
ReactDOM.render(<App groceryList={groceryList} />, document.getElementById('root'));
registerServiceWorker();
