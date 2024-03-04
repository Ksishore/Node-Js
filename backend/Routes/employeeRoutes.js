const express = require("express");
const router = express.Router();
const EmployeeController = require("../Controlars/EmployeeController");
const Employee = require("../Model.js/Employee");

// get,Post,Update,Delete

router.post("/add-emp", EmployeeController.createEmployee);
router.get("/allemployees", EmployeeController.getEmployees);
router.get("/employee/:id", EmployeeController.singleEmployee);
router.put("/update/:id", EmployeeController.UpdateEmployee);
router.delete("/delete/:id", EmployeeController.deleteEmployee);


module.exports = router;
