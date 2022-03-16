import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Card, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createEmployeeAction } from "../../actions/employeesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

function CreateEmployee({ history }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [employeeID, setEmployeeID] = useState("");


  const dispatch = useDispatch();

  const employeeCreate = useSelector((state) => state.employeeCreate);
  const { loading, error, employee} = employeeCreate;

  console.log(employee);

  const resetHandler = () => {
    setEmail("");
    setAddress("");
    setName("");
    setRole("");
    setEmploymentStatus("");
    setEmployeeID("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createEmployeeAction(email, name, address, role, employmentStatus, employeeID));
    if (!email || !name || !address || !role || !employmentStatus || !employeeID) return;

    resetHandler();
    history.push("/myemployees");
  };

  useEffect(() => {}, []);

  return (
    < >
      <Card bg="dark">
        <Card.Header>Create a new Employee</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            <Form.Group controlId="content">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                value={name}
                placeholder="Enter the name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="address"
                value={address}
                placeholder="Enter the Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="role"
                value={role}
                placeholder="Enter their Role"
                onChange={(e) => setRole(e.target.value)}
              />
              </Form.Group>

              <Form.Group controlId="content">
              <Form.Label>Employment Status</Form.Label>
              <Form.Control
                type="employmentstatus"
                value={employmentStatus}
                placeholder="Work Status of Employee"
                onChange={(e) => setEmploymentStatus(e.target.value)}
              />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>EmployeeID</Form.Label>
              <Form.Control
                type="role"
                value={employeeID}
                placeholder="EmployeeID"
                onChange={(e) => setEmployeeID(e.target.value)}
              />
              </Form.Group>
            {loading && <Loading size={50} />}
            <Button type="submit" variant="primary">
              Create Employee
            </Button>
            <Button className="mx-2" onClick={resetHandler} variant="danger">
              Reset Feilds
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default CreateEmployee;
