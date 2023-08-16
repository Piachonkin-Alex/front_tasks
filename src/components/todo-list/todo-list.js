import React from "react";
import TodoListItem from "../list-item";

import './todo-list.css';

const TodoList = ({ items, onDeleted, onToggleImportant, onToggleDone }) => {

    const elems = items.map((item) => {
        const {id, ...itemProps } = item;
        
        return (
            <li key={id} className="list-group-item">
               <TodoListItem {...itemProps}
               onDeleted= {() => onDeleted(id) }
               onToggleDone={() => onToggleDone(id)}
               onToggleImportant={() => onToggleImportant(id)}/> 
            </li>
        );
    });
    
    return (
      <ul className="list-group todo-list">
        {elems}
      </ul>
    )
  }

export default TodoList;
