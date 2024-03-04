const Employee = require("../model/Employee");

const createEmployee = async (req, res) => {
  try {
    const { name, email, phone, city } = req.body;

    const employee = new Employee({
      name,
      email,
      phone,
      city,
    });
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    console.log("Your Data is Wrong:", error);
    res.status(500).json({ message: "server error" });
  }
};
const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    console.log("There is an error :", error);
    res.status(500).json({ message: "server error" });
  }
};
const singleEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(400).json(employee);
    }
    res.status(200).json(employee);
  } catch (error) {
    console.log("There is an error :", error);
    res.status(500).json({ message: "server error" });
  }
};
const UpdateEmployee = async (req, res) => {
  try {
    const { name, email, phone, city } = req.body;

    const myEmployee = await Employee.findByIdAndUpdate(req.params.id, {
      name,
      email,
      phone,
      city,
    });
    if (!myEmployee) {
      return res.status(400).json({ message: "employee not found" });
    }
    res.status(200).json(myEmployee);
  } catch (error) {
    console.log("There is an error :", error);
    res.status(500).json({ message: "server error" });
  }
};
const deleteEmployee = async (req, res) => {
    try {
  
      const deleteEmployee = await Employee.findByIdAndDelete(req.params.id)
      res.status(204).send();
    } catch (error) {
      console.log("There is an error :", error);
      res.status(500).json({ message: "server error" });
    }
};

module.exports = {
  createEmployee,
  getEmployees,
  singleEmployee,
  UpdateEmployee,
  deleteEmployee,
};
