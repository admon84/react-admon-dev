import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutPage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>About me</h1>
                    <p>Admon is an alias that I prefer using on the internet.  I am a software engineer.</p>
                    <p>The journey began in 2001 when I compiled my first program.  I was a teenager playing classic games like StarCraft and Diablo II which used a Battle.net chat server to socialize between games.  I got my hands on the source code of a Battle.net chat client (bot) written in VB6 and figured out how to compile it.</p>
                    <p>The VB6 code was readable enough that I could step through it and and figure what the code was doing. At it's core, the program had a dependency named WINSOCK.DLL which was used to connect to the Battle.net chat server via Telnet and send packets of data.</p>
                    <p>At this point in my life, I knew I wanted to be a computer programmer. A few years later I started college and learned other languages like C, C++, C#, VB6, VB.NET, Java, COBOL, and ASM. I also learned about Databases and Web Development in college.</p>
                    <p>My first job as a professional was working at a large company and developing an application suite that was integrated with IBM software and and used VB6, VB.NET, Java and C#.</p>
                    <p>My next job was working at a small company and changed my career path to focus more on Web Development. Partnered with a graphic designer, I developed custom websites for local businesses using PHP, HTML, JavaScript and CSS and administered their web hosting with WHM.</p>
                    <p>Today I work at a large company developing websites and web applications while implementing DevOps automation and performing server administration.</p>
                    <p>Besides work, I also like taking on hobby development projects to explore new tech and keep my skills sharp. I started playing a MMO strategy sandbox game called Screeps in 2017 and developed a powerful codebase in TypeScript to solve challenges and automate solutions within the game platform.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>About this website</h3>
                    <p>This is my personal hobby website.  I started this project on a fresh VPS with Ubuntu. I registered this domain (admon.dev) and configured the DNS settings with an A record pointing to the server's IP address.</p>
                    <p>As soon as the Ubuntu was installed on the server, I logged with root, created a new user for myself with sudo permissions and then permanently disabled root logins over SSH.  Then I set up the firwall with the ufw package.</p>
                    <p>The websites I develop at work use a LAMP stack on CentOS and Ubuntu servers.  I wanted to use some different tech for this project so I'm using Nginx for the web server and React for the website.</p>
                    <p>I set up a Node toolchain with Webpack for bundling, and use the Babel Loader to transpile TypeScript into Vanilla JS for browser compatibility.</p>
                    <p><a href="https://github.com/admon84/react-admon-dev">View the website code in GitHub</a></p>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;
