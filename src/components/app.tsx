import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Header from './header';
import HomePage from '../pages/home';
import ScreepsBotPage from '../pages/projects-screeps-bot';
import ScreepsToolsPage from '../pages/projects-screeps-tools';
import Footer from './footer';

class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Header />
                    <div class="content">
                        <Switch>
                            <Route exact path="/">
                                <HomePage />
                            </Route>
                            <Route path="/screeps-bot">
                                <ScreepsBotPage />
                            </Route>
                            <Route path="/screeps-tools">
                                <ScreepsToolsPage />
                            </Route>
                        </Switch>
                    </div>
                    <Footer />
                </Router>
            </>
        );
    }
}

export default App;
