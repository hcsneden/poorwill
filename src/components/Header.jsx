import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = (props) => {


    return (
        <Navbar className="nav-bar" fixed="top">
            <Button className="content-button"variant="primary" onClick={props.handleShow}>Contact us</Button>
            <div>
                <img
                    alt=""
                    src={require("../img/logo.png")}
                    width='50%'
                    className="logo"
                />{" "}
            </div>


            
            <div className="socials">
            <a href="https://open.spotify.com/artist/242EQUEtpStM9vH0AoPwGt?si=suncu_mMTa61BoW2i9iCUg">
                    <img
                        alt="spotify logo"
                        className="socials-img"
                        src={require("../img/spotify.png")}
                    />
                </a>
                <a href="https://www.instagram.com/_poorwill_">
                    <img
                        alt="instagram logo"
                        className="socials-img"
                        src={require("../img/instagram.png")}
                    />
                </a>
                <a href="https://www.facebook.com/poorwillband">
                    <img
                        alt="facebook logo"
                        className="socials-img"
                        src={require("../img/fb.png")}
                    />
                </a>
            </div>
        </Navbar>
    );
};

export default Header;
