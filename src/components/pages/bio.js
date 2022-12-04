import React from "react";
import './bio.css';
import Resume from '../../assets/Yon_Resume.pdf'
import { Container, Row } from 'react-bootstrap';

const bio = () => {
    return(
        <div>
            <Container style={{ width: '75%' }}>
                <Row>
                    <h1>
                        <strong>Bio</strong>
                    </h1>
                </Row>
                <p>
                    I am Ian Frenze, also known as Yon, I am a Fullstack Developer with a particular interest in backend code. I am most familiar and comfortable coding with Node.js, Express.js, React.js, Lua, MySQL and Sequelize. Additionally, I am skilled in  HTML5, CSS, Javascript, jQuery, AJAX, and JSON. Currently based in Norristown, Pennslyvania.
                </p>
                <Row>
                <h5>Contact Information</h5>
                <a href="Yonimus@gmail.com" className="left-margin">
                    
                </a>
                <a 
                href="https://github.com/Yonimus"
                className="left-margin"
                >
                </a>
                <a href={Resume}
                className="left-margin">
                </a>
                <br />
                </Row>
            </Container>
        </div>
    )
}
export default bio;