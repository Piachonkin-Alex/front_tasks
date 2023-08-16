import React from 'react';
import './status-filter.css';

class ItemStatusFilter extends React.Component {
  render () {
    return (
      <div className="btn-group d-flex">
        <button type="button"
                className="btn btn-info">All</button>
        <button type="button"
                className="btn btn-outline-secondary">Active</button>
        <button type="button"
                className="btn btn-outline-secondary">Done</button>
      </div>
    );
  }
}

export default ItemStatusFilter;