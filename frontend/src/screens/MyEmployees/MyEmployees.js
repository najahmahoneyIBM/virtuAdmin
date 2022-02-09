import React, { useEffect } from "react";
import {
  Accordion,
  Badge,
  Button,
  Card,
  Table,
  Container,
  Row,
} from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteEmployeeAction,
  listEmployees,
} from "../../actions/employeesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton } from "@mui/material";

function MyEmployees({ history, search }) {
  const dispatch = useDispatch();

  const employeeList = useSelector((state) => state.employeeList);
  const { error, employees } = employeeList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const employeeDelete = useSelector((state) => state.employeeDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = employeeDelete;

  const employeeCreate = useSelector((state) => state.employeeCreate);
  const { success: successCreate } = employeeCreate;

  const employeeUpdate = useSelector((state) => state.employeeUpdate);
  const { success: successUpdate } = employeeUpdate;

  useEffect(() => {
    dispatch(listEmployees());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    successUpdate,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteEmployeeAction(id));
    }
  };

  return (
    <MainScreen>
      {console.log(employees)}
      <Link to="/createemployee">
        <AddCircleIcon style={{ marginLeft: 10, marginBottom: 6 }}>
          Add new Employee
        </AddCircleIcon>
      </Link>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )}
      {employees &&
        employees
          .filter((filteredEmployee) =>
            filteredEmployee.name.toLowerCase().includes(search.toLowerCase())
          )
          .reverse()
          .map((employee) => (
            <Accordion>
              <Card style={{ margin: 10 }} key={employee._id}>
                <Card.Header style={{ display: "flex" }}>
                  <span
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}
                  >
                    <Accordion.Toggle
                      as={Card.Text}
                      variant="link"
                      eventKey="0"
                    >
                      {employee.name}
                    </Accordion.Toggle>
                  </span>

                  <div>
                    <DeleteIcon onClick={() => deleteHandler(employee._id)}>
                      <Button variant="danger" className="mx-2">
                        Delete
                      </Button>
                    </DeleteIcon>
                  </div>
                </Card.Header>

                <div className="mx-6"></div>

                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <h5 justifyContent="center">
                      <Badge variant="success">
                        <Row>
                          <h5>Email - {employee.email}</h5>
                        </Row>
                        <Row>
                          <h5>Role - {employee.role}</h5>{" "}
                        </Row>
                        <Row>
                          <h5>
                            Employment status - {employee.employmentStatus}
                          </h5>{" "}
                        </Row>
                        <Row>
                          {" "}
                          <h5>EmployeeID - {employee.employeeID}</h5>{" "}
                        </Row>
                        <Button
                          color="danger"
                          href={`/employee/${employee._id}`}
                        >
                          Edit
                        </Button>
                      </Badge>
                    </h5>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          ))}
    </MainScreen>
  );
}

export default MyEmployees;
