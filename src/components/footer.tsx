import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Footer extends Component {
    render() {
        return (
            <Navbar className="footer" sticky="bottom" bg="light">
                <Container>
                    <Row>
                        <Col>
                            <p>This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">CC BY 4.0 License</a>.</p>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        );
    }
}

export default Footer;
