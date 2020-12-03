import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

export default function footer({ theme, toggleTheme }) {
    return (
        <div>
            <Navbar
                style={{
                    backgroundColor: theme.navbarColor
                }}
                className="d-md-flex justify-content-md-center mt-5 position-absolute w-100">
                <Navbar.Brand className="text-white" >
                    &#169; 2020
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}
