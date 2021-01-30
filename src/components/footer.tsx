import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends Component {
    render() {
        return (
            <Navbar className="footer" sticky="bottom" bg="light">
                <Container>
                    <p>Copyright &copy; {new Date().getFullYear()} admon84.</p>
                </Container>
            </Navbar>
        );
    }
}

export default Footer;
