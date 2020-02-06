import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
//import "./styles.css";
function Dashboard(props) {
    console.log(props);
    return (
        <div>
            Hello from the Dashboard!
        </div>
    )
}

export default Dashboard;