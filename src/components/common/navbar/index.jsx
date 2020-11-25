import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

export default function navbar({ theme, toggleTheme }) {
    return (
        <div>
            <Navbar
                style={{
                    backgroundColor: theme.navbarColor
                }}
                className="d-md-flex justify-content-md-center sticky-top">
                <Navbar.Brand className="text-white" >
                    MOVIES
          </Navbar.Brand>

                <img
                    src={theme.bulbIcon}
                    alt="Dark Mode Indicator"
                    onClick={toggleTheme}
                />
            </Navbar>
        </div>
    )
}
