import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { v4 as uuidv4 } from "uuid";

function MyForm({handleNewTodo}) {
  const [todo, setTodo] = useState({id: uuidv4(), title: "", desc: "" });
  const { title, desc } = todo;

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;

    setTodo((prevTodo) => ({
      ...prevTodo,
      [fieldName]: value,
    }));

    console.log(fieldName, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    handleNewTodo(todo);
    setTodo({id: uuidv4(), title: '', desc: ''});
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label style={{ color: "white" }}>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter Ttile"
            value={title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label style={{ color: "white" }}>Description</Form.Label>
          <Form.Control
            type="text"
            name="desc"
            placeholder="Description"
            value={desc}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default MyForm;
