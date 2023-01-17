import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <NavLink to="/" className="navbar-brand" href="#" style={{ fontWeight: "bold" }}>Student Page</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Navbar