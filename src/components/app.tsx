import React from 'react';

import '../styles/index.less';

import EmailIcon from '../images/email.svg';
import GitHubIcon from '../images/github.svg';
import DevIcon from '../images/dev.svg';

class App extends React.PureComponent {
    render() {
        return (
            <main className="layout">
                <div className="content">
                    <div className="heading">
                        <h1>admon.dev</h1>
                    </div>
                    <ul className="link-list">
                        <li>
                            <EmailIcon className="icon" />
                            admonwest84&#x40;gmail
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
