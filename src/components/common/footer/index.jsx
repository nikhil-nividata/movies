import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

export default function footer({ theme }) {
    return (
        <div>
            <Navbar
                style={{
                    backgroundColor: theme.navbarColor,
                }}
                className="d-md-flex justify-content-md-center  w-100">
                <Navbar.Brand className="text-white" >
                    &#169; 2020
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}
