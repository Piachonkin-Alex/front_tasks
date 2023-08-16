import React from "react";

import './add-form.css';

export default class ItemAddForm extends React.Component {

    state = {
        label : '',
    }

    OnLabelChange = (event) => {
        this.setState({
            label : event.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdd(this.state.label);
        this.setState({
            label : ''
        });
    }


    render() {
        const {onItemAdd} = this.props;
        return (
            <form className="item-add-form"
                  onSubmit={this.onSubmit}>
                <input type='text'
                        className="form=control"
                        onChange={this.OnLabelChange}
                        placeholder="Your text here"
                        value={this.state.label}>
                </input>
                <button 
                className="btn btn-outline-secondary"
                >Add Item</button>
            </form>
        );
    }
}