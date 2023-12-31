import React from "react";

import './list-item.css';

class TodoListItem extends React.Component{

    render() {
        const { label, onDeleted, onToggleImportant,
             onToggleDone,  done, important} = this.props;

        let classNames = 'todo-list-item';
        if (done) {
            classNames +=  ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return (<span className={classNames}>
            <span 
            className="todo-list-item-label"
            onClick={ onToggleDone }
            >
            {label}
            </span>
    
            <button type="button"
                  className="btn btn-outline-success btn-sm float-end"
                  onClick={onToggleImportant}>
            <i className="fa fa-exclamation" />
            </button>
    
          <button type="button"
                  className="btn btn-outline-danger btn-sm float-end"
                  onClick={onDeleted}>
            <i className="fa fa-trash"></i>
          </button>
          </span>
        );
    }
}

export default TodoListItem;