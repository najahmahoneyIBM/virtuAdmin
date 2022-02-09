import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import axios from "axios";
import { Button, Card, Form, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteEmployeeAction,
  updateEmployeeAction,
} from "../../actions/employeesActions";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";

function SingleEmployee({ match, history }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [employeeID, setEmployeeID] = useState("");

  const dispatch = useDispatch();

  const employeeUpdate = useSelector((state) => state.employeeUpdate);
  const { loading, error } = employeeUpdate;

  const employeeDelete = useSelector((state) => state.employeeDelete);
  const { loading: loadingDelete, error: errorDelete } = employeeDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteEmployeeAction(id));
    }
    history.push("/myemployees");
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/employees/${match.params.id}`);
      setEmail(data.email);
      setAddress(data.address);
      setName(data.name);
      setRole(data.role);
      setEmploymentStatus(data.setEmploymentStatus);
      setEmployeeID(data.employeeID);
    };

    fetching();
  }, [match.params.id]);

  const resetHandler = () => {
    setEmail("");
    setAddress("");
    setName("");
    setRole("");
    setEmploymentStatus("");
    setEmployeeID("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateEmployeeAction(
        match.params.id,
        email,
        name,
        address,
        role,
        employmentStatus,
        employeeID
      )
    );
    if (
      !email ||
      !name ||
      !address ||
      !role ||
      !employmentStatus ||
      !employeeID
    )
      return;

    resetHandler();
    history.push("/myemployees");
  };

  return (
    <MainScreen title="Edit Employee">
      <Card>
        <Card.Header>Edit your Employee</Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler}>
            {loadingDelete && <Loading />}
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {errorDelete && (
              <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
            )}
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
            <Button variant="primary" type="submit">
              Update Employee
            </Button>
            <Button
              className="mx-2"
              variant="danger"
              onClick={() => deleteHandler(match.params.id)}
            >
              Delete Employee
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </MainScreen>
  );
}

export default SingleEmployee;
