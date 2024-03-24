import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MyForm from "./components/Form";

export const DModal = ({
  handleSubmit,
  handleChange,
  id,
  title,
  description,
  priority,
  created,
  updated
  }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="text-center mt-3">
        <Button className="" variant="outline-primary" onClick={handleShow}>
            Add Todo
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MyForm handleChange={handleChange} 
          handleSubmit={handleSubmit} 
          
          id={id}
          title={title}
          description={description}
          priority={priority}
          created={created}
          updated={updated}
          
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
