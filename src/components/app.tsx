import React from 'react';

import '../images/profile.png';
import '../images/favicon-32.png';
import '../images/favicon-16.png';

import '../styles/index.less';

class App extends React.PureComponent {
    render() {
        return (
            <main className="content">
                <p className="heading">
                    <span className="mint">~/</span>
                    admon
                    <span className="gray">.</span>
                    dev
                    <span className="mint">#</span>
                </p>
                <a href="https://github.com/admon84" title="github/admon84">
                    <img src="/profile.png" />
                    <p className="author">
                        admon84
                    </p>
                </a>
            </main>
        );
    }
}

export default App;
