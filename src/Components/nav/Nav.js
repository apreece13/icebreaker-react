import React, { Component } from "react";
import { Navbar, NavDropdown } from 'react-bootstrap';
import "./nav.css"


class Nav extends Component {
    
    render (){
        return (
            <>
                <Navbar className="icebreaker-navbar" expand="lg" bg="light">
                    <Navbar.Brand href="#">Icebreaker</Navbar.Brand>
                    {/* Companies Dropdown */}
                    <NavDropdown title="Companies" id="collasible-nav-dropdown-company" active="false">
                        <NavDropdown.Item href="#action/3.1">Find A Company</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    {/* Job Seekers Dropdown */}
                    <NavDropdown title="Job Seekers" id="collasible-nav-dropdown-job-seeker">
                        <NavDropdown.Item href="#action/3.1">Find A Company</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    {/* Nav.Link not working */}
{/*                     <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
 */}                </Navbar>     
            </>
            )
    }
};

export default Nav;