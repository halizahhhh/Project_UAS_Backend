// import EmployeeController
const EmployeeController = require('../controllers/EmployeeController');
// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello HRD API Express");
});

// Membuat routing employee
router.get('/employees', EmployeeController.index);
router.post('/employees', EmployeeController.store);
router.put('/employees/:id', EmployeeController.update);
router.delete('/employees/:id', EmployeeController.destroy);
// menambahkan route untuk get detail resource
router.get("/employees/:id", EmployeeController.show);
//menambahkan route untuk mencari data pegawai berdasarkan nama
router.get("/employees/search/:nama", EmployeeController.search);
//menambahkan route untuk mencari data paegawai berdasarkan status
router.get("/employees/status/active", EmployeeController.status);
router.get("/employees/status/inactive", EmployeeController.status);
router.get("/employees/status/terminated", EmployeeController.status);
// export router
module.exports = router;
