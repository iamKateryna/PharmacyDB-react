import React from "react";
import "./Title.css";
import {NavLink} from "react-router-dom";

export default class Title extends React.Component{
    render() {
        return(
            <header className={'header'}>
                <nav className={'navbar'}>
                    <NavLink className={"navbar_link"} to="/add_info">Add Info</NavLink>
                    <NavLink className={"navbar_link"} to="/get_info">Get Info</NavLink>
                </nav>
                <h1>PHARMACY</h1>
            </header>
        );
    }
}