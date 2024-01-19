// import model Employee
const Employee = require("../models/Employee");

class EmployeeController {
    async index(req, res) {
        // TODO 4: Tampilkan data pegawai
        const employees = await Employee.all();
    if (employees.length > 0){
        const data = {
            message: "Menampilkan data pegawai",
            data: employees
        };
        return res.status(200).json(data);
    }
        // else
        const  data = {
            message : "Pegawai is empty"
        };
        return res.status(200).json(data);
    }

    async store(req, res) {
        /**
         * TODO 2: memanggil method create.
         * Method create mengembalikan data yang baru diinsert.
         * Mengembalikan response dalam bentuk json.
         */

        /**
         * Vlidasi sederhana
         * - Handle jika salah satu data tidak dikirim
         */

        // destrructing object req.body
        const { nama, jk, phone, alamat, email, status, tgl_masuk } = req.body;
        // jika data undefined maka kirim respon error 
        if (!nama || !jk || !phone || !alamat || !email || !status || !tgl_masuk  ){
            const data = {
                message : "Semua data harus dikirim"
            };
            return res.status(422).json(data);
        }
        // else 
        const employees = await Employee.create(req.body);
        const data = {
            message: "Menambahkan data pegawai",
            data: employees
        };

        res.status(201).json(data);
    }


    async update(req, res) {
        const { id } = req.params;
        // cari id pegawai yang ingin di update
        const employees = await Employee.find(id);

        // TODO 6: Update data pegawai
        // code here
        if (employees) {
            // melakukan update data
            const employees = await Employee.update(id, req.body);
            const data = {
                message: `Mengedit data pegawai`,
                data: employees,
        };
        res.status (200).json(data);
    }
    else {
        const data = {
            message: 'pegawai not found',
        };
        res.status(404).json(data);
        }
    }

    async destroy(req, res) {
        const { id } = req.params;
        const employees = await Employee.find(id);

        // TODO 7: Hapus data pegawai
        // code here
        if (employees){
            await Employee.delete (id);
            const data = {
                message: `Menghapus data pegawai`,
        };
        res.status(200).json(data);
        }else {
            const data = {
                message : 'Pegawai not found',
            };
            res.status(404).json(data);
        }
    }

    async show(req, res) {
        const {id} = req.params;
        // cari pegawai berdasarkan id
        const employees = await Employee.find(id);

        if(employees){
            const data = {
                message : 'Menampilkan detail pegawai',
                data: employees
            };
            res.status(200).json(data);
        }
        else {
            const data = {
                message: 'pegawai not found',};
                res.status(404).json(data);
        }
    }
    //Membuat method Search untuk mencari data pegawai berdasarkan nama
    async search (req, res) {
      const {nama} = req.params;
      // cari pegawai berdasarkan nama
      const employees = await Employee.find(nama);

      if(employees){
          const data = {
              message : 'Menampilkan nama pegawai',
              data: employees
          };
          res.status(200).json(data);
      }
      else {
          const data = {
              message: 'nama pegawai not found',};
              res.status(404).json(data);
      }
  }

    // Membuat method Status untuk mencari data pegawai berdasarkan status apakah actic atau inactiv 
  async status (req, res) {
    const {status} = req.params;
    // cari pegawai berdasarkan status
    const employees = await Employee.find(status);

    if(employees){
        const data = {
            message : 'Menampilkan status pegawai',
            data: employees
        };
        res.status(200).json(data);
    }
    else {
        const data = {
            message: 'status pegawai not found',};
            res.status(404).json(data);
    }
}
}

// make an object Employee Controller
const object = new EmployeeController();

// export object
module.exports = object;