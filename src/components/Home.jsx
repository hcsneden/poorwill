import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const Home = () => {
    return (
        <div  className='main-content'>
        <Row>
            <Col lg={1} md={1} sm={1}></Col>
            <Col lg={5} md={10} sm={8}>
                <img className='band-photo'
                    src={require("../img/EP.jpeg")} />
            </Col>
            <Col lg={5} md={10} sm={8}>
                <p className="text-heading">Tough Kid EP out now</p>
                <p>Available on all streaming platforms</p>
                <Button variant="secondary" href="https://open.spotify.com/album/5bLA0l2kii9gD062sLMWt1?si=a3kmTCiqT9el8qvt8TrooQ">Listen Now</Button>
            </Col>
            <Col lg={1} md={0} sm={0}></Col>
        </Row>

            <div className="break"></div>

            <div className='shows-container'>
                <h1>Shows</h1>
                <p className="show-item">Caydence Record Store - St. Paul, MN</p>
                <p>April 8, 2023 - 7PM</p>
                <Button className="ticket-button">Tickets</Button>
                <p className="show-item">Underground Music Cafe - Minneapolis, MN</p>
                <p>April 8, 2023 - 7PM</p>
                <Button className="ticket-button" >Tickets</Button>
            </div>


        </div>
    )
}

export default Home