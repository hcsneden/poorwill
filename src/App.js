import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Button } from "react-bootstrap";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <Header handleShow={handleShow}></Header>
      <Home></Home>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Please get in touch with booking enquiries or questions.</Form.Label>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form.Group>
          </Form>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" href="mailto:poorwillandfriends@gmail.com" onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  );
}

export default App;
