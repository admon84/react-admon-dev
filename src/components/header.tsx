import React, {Component} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../images/logo.svg';

class Header extends Component {
    render() {
        return (
            <Navbar className="header" bg="dark" variant="dark" expand="md">
                <Container>
                    <Navbar.Brand href="/">
                        <Logo />admon.dev
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <LinkContainer to="/about">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                            <NavDropdown title="Projects" id="basic-nav-dropdown">
                                <LinkContainer to="/screeps-bot">
                                    <NavDropdown.Item>
                                        Screeps Bot
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/screeps-tools">
                                    <NavDropdown.Item>
                                        Screeps Tools
                                    </NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            <Nav.Link href="https://github.com/admon84">GitHub</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;
