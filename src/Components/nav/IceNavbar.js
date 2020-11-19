import React, { Component } from "react";
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import "./nav.css"


class IceNavbar extends Component {
    
    render (){
        return (
            <>
                <Navbar collapseOnSelect className="icebreaker-navbar" expand="lg" bg="light">
                    {/* Logo/Title */}
                    <Navbar.Brand href="#">Icebreaker</Navbar.Brand>

                    {/* Navbar responsive settings */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">


                        {/* Left Section */}
                        <Nav className="mr-auto">
                            {/* Companies Dropdown */}
                            <NavDropdown title="Companies" id="collasible-nav-dropdown-company" active="false">
                                <NavDropdown.Item href="#action/3.1">Find A Company</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Compare Companies</NavDropdown.Item>
                            </NavDropdown>
                            
                            {/* Job Seekers Dropdown */}
                            <NavDropdown title="Job Seekers" id="collasible-nav-dropdown-job-seeker">
                                <NavDropdown.Item href="#action/3.1">Find A Company</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>

                            {/* Nav.Links */}                     
                            <Nav.Link href="#Forums">Forums</Nav.Link>
                            <Nav.Link href="#Testimonials">Testimonials</Nav.Link>
                            <Nav.Link href="#Bookmarks">Bookmarks</Nav.Link>
                        </Nav>

                        {/* Right Section */}
                        <Nav className="">

                            {/* My Account Dropdown */}
                            <NavDropdown title="My Account" id="collasible-nav-dropdown-job-seeker">
                                <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Account Information</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                            </NavDropdown>

                            {/* Logged in user's email address*/}
                            <Nav.Link eventKey={2} href="#memes">
                                Email Address
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>     
            </>
            )
    }
};

export default IceNavbar;