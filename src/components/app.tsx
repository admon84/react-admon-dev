import React from 'react';

import EmailIcon from '../images/email.svg';
import GitHubIcon from '../images/github.svg';
import DevIcon from '../images/dev.svg';

import '../images/favicon-32.png';
import '../images/favicon-16.png';

import '../styles/index.less';

class App extends React.PureComponent {
    render() {
        return (
            <main className="layout">
                <div className="content">
                    <div className="heading">
                        <p>
                            <span className="lime">~/</span>
                            admon
                            <span className="gray">.</span>
                            dev
                            <span className="lime">#</span>
                        </p>
                    </div>
                    <ul className="link-list">
                        <li>
                            <a href="https://screeps.admon.dev">
                                screeps tools
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/admon84">
                                github
                            </a>
                        </li>
                    </ul>
                </div>
            </main>
        );
    }
}

export default App;
