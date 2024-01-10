import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const Home = () => {
    return (
        <div>
            {/* <div className="main-content">

            </div> */}
            <img className="hero-image"src={require('../img/Frame 22.png')}/>
            <Row className="cards">
                <Col className="card about" md={4}><h2>About</h2> <p>Poorwill is a Minneapolis based 4 piece band. Formed in 2018, their sound has been described as indie rock with a yeehaw lilt.</p></Col>
                <Col md={4}></Col>
                <Col className="card shows" md={4}><h2>Shows</h2> <p className="show-title">Lift Bridge Brewery / Jan 27 / 3PM</p><p></p></Col>
            </Row>
            <Row className="cards">
                <Col className="card contact" md={{ span: 4, offset: 4 }}><h2>Contact</h2>
                    <p>To get in touch with us about booking or anything else, send us an email at <a href = "mailto: abc@example.com">poorwillandfriends@gmail.com</a></p>
                </Col>
            </Row>
        </div>
    )
}

export default Home