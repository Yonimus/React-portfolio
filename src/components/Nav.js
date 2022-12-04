import React from "react";
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <NavBar className='navbar navbar-expand-lg navbar-dark bg-dark' responsive='true'>
            <NavLink to='/'>
                <Navbar.Brand>
                    <div className="navbar-title">Ian Frenze</div>
                </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basci-navbar-nav"/>
            <NavBar.Collapse id='basic-navbar-nav'>
                <Nav>
                    <NavLink to='/' exact className='na-link'>Bio</NavLink>
                    <NavLink to='/portfolio' className='nav-link'>Portfolio</NavLink>
                    <NavLink className='nav-link' to='/contact'>Contact</NavLink>
                </Nav>
            </NavBar.Collapse>
        </NavBar>
    )
}
export default NavBar;