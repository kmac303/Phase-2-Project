import React from "react";
import {NavLink} from "react-router-dom";


function NavBar() {
    return (
        <div className="navbar">
            <NavLink to="/">Home</NavLink>
            <br/>
            <NavLink to="/addvenue">Add Venue</NavLink>
            <br/>
            <NavLink to="/about">About</NavLink>
        </div>
    )
}

export default NavBar;