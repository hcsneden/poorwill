import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const Home = () => {
    return (
        <div>
            <Row className="content-row">
                <Col className="side-col" md={1}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="656" viewBox="0 0 36 656" fill="none">
                    <path d="M18.0001 0L0.679551 30L35.3206 30L18.0001 0ZM21 1382L21.0001 27L15.0001 27L15 1382L21 1382Z" fill="black" />
                </svg></Col>
                <Col md={10}></Col>
                <Col className="side-col flip" md={1}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="656" viewBox="0 0 36 656" fill="none">
                    <path d="M18.0001 0L0.679551 30L35.3206 30L18.0001 0ZM21 1382L21.0001 27L15.0001 27L15 1382L21 1382Z" fill="black" />
                </svg></Col>
            </Row>
        </div>
    )
}

export default Home