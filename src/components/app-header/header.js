import React from "react";

import './header.css';

const AppHeader = ({todo, done}) => {
    return (
    <div className="app-header d-flex">
     <h1>My todo list</h1>
     <h2>{todo} in progress, {done} done</h2>
    </div>
    );
}

export default AppHeader;