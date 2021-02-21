import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Header from './header';
import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import ScreepsBotPage from '../pages/projects-screeps-bot';
import ScreepsToolsPage from '../pages/projects-screeps-tools';
import Footer from './footer';

class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <div class="content">
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/screeps-bot" component={ScreepsBotPage} />
                        <Route path="/screeps-tools" component={ScreepsToolsPage} />
                    </Switch>
                </div>
                <Footer />
            </Router>
        );
    }
}

export default App;
