import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

interface State {
    isOpen: boolean;
}

class App extends Component {
    public readonly state: State = {
        isOpen: false
    };

    constructor(props: any) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Router>
                <div>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">
                            admon.dev
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink to="/" tag={Link}>
                                        Home
                                    </NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Projects
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem tag="span">
                                            <Link to="/projects/screeps-bot">
                                                Screeps Bot
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem tag="span">
                                            <Link to="/projects/screeps-tools">
                                                Screeps Tools
                                            </Link>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <NavLink href="https://github.com/admon84">GitHub</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>

                    <Switch>
                        <Route path="/projects/screeps-bot">
                            <ProjectsScreepsBot />
                        </Route>
                        <Route path="/projects/screeps-tools">
                            <ProjectsScreepsTools />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

function Home() {
    return <h2>Home</h2>;
}

function ProjectsScreepsBot() {
    return <h2>Screeps Bot</h2>;
}

function ProjectsScreepsTools() {
    return <h2>Screeps Tools</h2>;
}

export default App;
