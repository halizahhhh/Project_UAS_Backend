// import database
const db = require("../config/database");

// membuat class Employee
class Employee {
    static all() {
      return new Promise((resolve, reject) => {
          // lakukan query ke db untuk ambil data
          const query = "SELECT * FROM employees";
          db.query(query, (err, results) => {
              resolve(results);
          });
      });
  }
    // promise 1 melakukan insert ke database    
    static async create(Employee) {
      const id = await new Promise((resolve, reject) => {
          const sql = "INSERT INTO employees SET ?";
          db.query(sql, Employee, (err, results) => {
              resolve(results.insertId);
          });
  });


  // promise 2 : get data by id
  const employees = this.find(id);
  return employees;
  // return new Promise((resolve, reject) => {
  //     const sql = `SELECT * FROM employees WHERE id = ?`;
  //     db.query(sql, id, (err, results) => {
  //         resolve(results);
  //     });
  // });
  }


  static find(id) {
  // lakukan promise, select by id
  return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM employees WHERE id = ?`;
      db.query(sql, id, (err, results) => {
          resolve(results[0]);
      });
  });
  }

  static async update(id, data) {
  // update data
  await new Promise((resolve, reject) => {
      // query untuk update data
      const sql = "UPDATE employees SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, results) => {
          resolve(results);
      });
  });

  // select data by id
  const employees = await this.find(id);
  return employees;
  }

  static async delete(id) {
  // query delete
  return new Promise((resolve, reject) => {
      // query sql
      const sql = "DELETE FROM employees WHERE id = ?";
      db.query(sql, id, (err, results) => {
          resolve(results);
      });
  });
  }

  //get data berdasarkan nama 
  static find(nama) {
    // lakukan promise, untuk mencari data pegawai berdasarkan nama
    return new Promise((resolve, reject) => {
      // lakukan query ke db untuk ambil data berdasarkan nama 
        const sql = `SELECT * FROM employees WHERE nama = ?`;
        db.query(sql, nama, (err, results) => {
            resolve(results[0]);
        });
    });
    }

     //get data berdasarkan status 
  static status(status) {
    // lakukan promise, untuk mencari data pegawai berdasarkan status
    return new Promise((resolve, reject) => {
      // lakukan query ke db untuk ambil data berdasarkan status
        const sql = `SELECT * FROM employees WHERE status = ?`;
        db.query(sql, status, (err, results) => {
            resolve(results[0]);
        });
    });
    }
}

// export class Employee
module.exports = Employee;