import React from 'react';
import { Link } from 'react-router-dom';
// import classNamees from '*.module.css';
import { Navbar, Nav, Form, Button, NavDropdown } from 'react-bootstrap';
import { getJwt } from '../helper/jwt';
import cookie from 'react-cookies';

const jwt = getJwt();

export class NavBarComponent extends React.Component<any, any> {
    static async getInitialProps() {
        const token = cookie.load('EJ-token')
        return { token };
    }

    constructor(props: any) {
        super(props);

        this.state = props.token;
    }

    parseJwt = (token: any) => {
        if (!token) {
            return "";
        }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }
    
    tokenExtracted = this.parseJwt(localStorage.getItem('EJ-token'));
    
    checkLoggedIn() {
        const jwt = getJwt();
        
        if (!jwt) {
            
        }
    }

    logout() {
        localStorage.removeItem('EJ-token');
        window.location.reload();
        console.log('loggign out');
    }

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    {
                        jwt ?
                        <Navbar.Brand><Link to="/home" id="link">
                        Home </Link></Navbar.Brand> : null
                    }
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    {
                        jwt ?
                        <NavDropdown title="Contact Information" id="link">
                            <NavDropdown.Item><Link to="/contact-information" className="dropdown-color">
                                General Contact Information
                            </Link></NavDropdown.Item>
                        </NavDropdown> : null
                    }
                    {
                        jwt ?
                        <NavDropdown title="Financial Information" id="link">
                            <NavDropdown.Item><Link to="/transaction-information" className="dropdown-color">
                                Transaction Information
                            </Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/card-information" className="dropdown-color">
                                Card Information
                            </Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/bank-information" className="dropdown-color">
                                Bank Information
                            </Link></NavDropdown.Item>
                        </NavDropdown> : null
                    }
                    {
                        jwt ?
                        <NavDropdown title="Automotive Information" id="link">
                            <NavDropdown.Item><Link to="/car-information" className="dropdown-color">
                                Car Information
                            </Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/car-record-information" className="dropdown-color">
                                Car Record Information
                            </Link></NavDropdown.Item>
                            {/* <NavDropdown.Item><Link to="/repair-shop-information" className="dropdown-color">
                                Repair Shop Information
                            </Link></NavDropdown.Item> */}
                        </NavDropdown> : null
                    }
                    {
                        jwt ?
                        <NavDropdown title="Medical Information" id="link">
                            <NavDropdown.Item><Link to="/medical-record-information" className="dropdown-color">
                                Medical Record Information
                            </Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/doctor-office-information" className="dropdown-color">
                                Doctor Office Information
                            </Link></NavDropdown.Item>
                        </NavDropdown> : null
                    }
                    {
                        jwt ?
                        <Nav.Link href="#media" className="navbar-button">Media</Nav.Link> : null
                    }
                    {/* <Nav.Link>
                        <Link to="/fun-applications" id="link">
                       Fun Applications
                        </Link>
                    </Nav.Link> */}
                    </Nav>
                    <Form inline>
                        {
                            jwt ?
                            <Button variant="dark" size="lg" onClick={this.logout}>Logout</Button> :

                            <Button variant="outline-success" id="link">
                                <Link to="/login">
                                </Link>
                            </Button>
                        }
                    </Form>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}