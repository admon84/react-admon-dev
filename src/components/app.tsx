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
                        <h1>
                            <span className="lime">~/</span>
                            admon
                            <span className="gray">.</span>
                            dev
                            <span className="lime">#</span>
                        </h1>
                    </div>
                    <ul className="link-list">
                        <li>
                            <EmailIcon className="icon" />
                            admonwest84
                            <span className="gray">[at]</span>
                            gmail.com
                        </li>
                        <li>
                            <a href="https://github.com/admon84">
                                <GitHubIcon className="icon" />
                                github.com/admon84
                            </a>
                        </li>
                        <li>
                            <a href="https://dev.to/admon84">
                                <DevIcon className="icon" />
                                dev.to/admon84
                            </a>
                        </li>
                    </ul>
                </div>
            </main>
        );
    }
}

export default App;
