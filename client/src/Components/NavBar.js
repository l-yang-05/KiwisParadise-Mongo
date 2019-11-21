import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {


    return (
        <React.Fragment>
            <Navbar expand="md" className='pb-4'>
                <Nav.Item className="logo-name-2"><NavLink to="/" className="logo-name-2"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Font_Awesome_5_solid_kiwi-bird.svg/1152px-Font_Awesome_5_solid_kiwi-bird.svg.png" alt="logo" />Kiwi's Paradise</NavLink></Nav.Item>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav.Item className="logo-name"><NavLink to="/" className="logo-name"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Font_Awesome_5_solid_kiwi-bird.svg/1152px-Font_Awesome_5_solid_kiwi-bird.svg.png" alt="logo" />Kiwi's Paradise</NavLink></Nav.Item>
                    <Nav className="ml-auto">
                        {props.currentUser
                            ? (
                                <React.Fragment>
                                    <Nav.Item>
                                        <NavLink to="/">Home</NavLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink to="/products">Products</NavLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink to="/users">Users</NavLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink to="/logout">Log Out</NavLink>
                                    </Nav.Item>

                                </React.Fragment>
                            )
                            : (
                                <React.Fragment>
                                    <Nav.Item>
                                        <NavLink to="/">Home</NavLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink to="/products">Products</NavLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink to="/contacts">Contact Us</NavLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink to="/login">Log In</NavLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink to="/signup">Sign Up</NavLink>
                                    </Nav.Item>

                                </React.Fragment>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}


export default NavBar