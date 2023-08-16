import React from "react";
import { v4 as uuidv4 } from 'uuid';
import './app.css';

import AppHeader from '../app-header';
import ItemAddForm from "../item-add-form";
import Searching from '../search-panel';
import ItemStatusFilter from '../status-filter';
import TodoList from '../todo-list';

export default class App extends React.Component {

    state = {
        todoData : [
            this.createItem('Drink tea'),
            this.createItem('Create app'),
            this.createItem('Retire from univer')
          ],
        pattern : '',
    };

    createItem(label) {
        return {label, important : false, done : false, id : uuidv4()};
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            let index = -1;
            for (let i = 0; i < todoData.length; i++){
                if (todoData[i].id === id){
                    index = i;
                    break;
                }
            }
            
            const before = todoData.slice(0, index);
            const after = todoData.slice(index + 1);

            return {
                todoData: [...before, ...after]
            }
        });
    }

    addItem = (text) => {
        const newItem = this.createItem(text);
        this.setState(({todoData}) => {
            return {
                todoData: [...todoData, newItem],
            }
        });
    }

    toggleProperty(arr, id, propName) {
        const ind = arr.findIndex((el) => el.id === id);
        const newItem = {...arr[ind], [propName] : !arr[ind][propName]};
        
        return  [
                ...arr.slice(0, ind),
                newItem,
                ...arr.slice(ind + 1)
            ]
    }
    
    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {   
            return {
                todoData : this.toggleProperty(todoData, id, 'important')
            }
        });
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {   
            return {
                todoData : this.toggleProperty(todoData, id, 'done')
            }
        });
    }

    onUpdatePatt = (patt) => {
        this.setState({
            pattern : patt
        })
    }

    visibleItems() {
        if (this.state.pattern.length === 0) {
            return this.state.todoData;
        }



        return this.state.todoData.
            filter((el) => el.label.toLowerCase().
            indexOf(this.state.pattern.toLowerCase()) > -1);
    } 


    render () {
        const doneItems =  this.state.todoData.filter((el) => el.done).length;
        const todoCount =  this.state.todoData.length - doneItems;

        const visible = this.visibleItems();

        return (
            <div className="todo-app">
              <AppHeader todo={todoCount} done={doneItems} />
              <div className="top-panel d-flex">
                <Searching 
                onUpdatePatt={this.onUpdatePatt}/>
                <ItemStatusFilter />
              </div>
              <TodoList items={visible}
               onDeleted = {this.deleteItem}
               onToggleDone={this.onToggleDone}
               onToggleImportant={this.onToggleImportant}/>
               <ItemAddForm onItemAdd = {this.addItem}/>
            </div>
          )
    }


    

}
