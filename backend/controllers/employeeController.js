import Employee from "../models/employeeModel.js";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";


const getEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find({ user: req.user._id });
  res.json(employees);
});


const getEmployeeById = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ message: "Employee not found" });
  }

  res.json(employee);
});

const CreateEmployee = asyncHandler(async (req, res) => {
  const { email, name, address, role, employmentStatus, employeeID } = req.body;

  if (!email || !name || !address || !role || !employmentStatus || !employeeID) {
    res.status(400);
    throw new Error("Please Fill in all the fields");
    return;
  } else {
    const employee = new Employee({ user: req.user._id, email, name, address, role, employmentStatus, employeeID });

    const createdEmployee = await employee.save();

    res.status(201).json(createdEmployee);
  }
});


const DeleteEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (employee.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (employee) {
    await employee.remove();
    res.json({ message: "Employee Removed" });
  } else {
    res.status(404);
    throw new Error("Employee not Found");
  }
});

const UpdateEmployee = asyncHandler(async (req, res) => {
  const { email, name, address, role, employmentStatus, employeeID } = req.body;

  const employee = await Employee.findById(req.params.id);

  if (employee.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (employee) {
    employee.email = email;
    employee.name = name;
    employee.address = address;
    employee.role = role;
    employee.employmentStatus = employmentStatus;
    employee.employeeID = employeeID;


    const updatedEmployee = await employee.save();
    res.json(updatedEmployee);
  } else {
    res.status(404);
    throw new Error("Employee not found");
  }
});

export { getEmployeeById, getEmployees, CreateEmployee, DeleteEmployee, UpdateEmployee };
