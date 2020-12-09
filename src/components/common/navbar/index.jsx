import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

export default function navbar({ theme, toggleTheme }) {
    return (
        <div className="sticky-top">
            <Navbar
                style={{
                    backgroundColor: theme.navbarColor
                }}
                className="d-md-flex">
                <Link to='/'>
                    <img
                        src={theme.homeIcon}
                        alt="Home Icon"
                        className="ml-4"
                        style={{
                            height: '2rem',
                            cursor: 'pointer'
                        }}
                    />
                </Link>

                <Navbar.Brand
                    className="text-white"
                    style={{
                        marginLeft: 'auto'
                    }}
                >
                    MOVIES
                </Navbar.Brand>

                <img
                    src={theme.bulbIcon}
                    alt="Dark Mode Indicator"
                    onClick={toggleTheme}
                    style={{
                        height: '2rem',
                        cursor: 'pointer',
                        marginRight: 'auto'
                    }}
                />
            </Navbar>
        </div>
    )
}
