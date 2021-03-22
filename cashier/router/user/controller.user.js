//ambil koneksi dari config db
const connection = require("../../config/db");

const queryUser = `
select 
user.id,
user.nama,
user.alamat,
user.kode_pos from user
`;

module.exports = {
  getAllUser: (req, res) => {
    connection.query(queryUser, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  },
  getIDUser: (req, res) => {
    connection.query(
      `${queryUser} where user.id = ${req.params.id}`,
      (err, data) => {
      if(err) {
        console.log(err);
      }else {
        res.json(data);
      }
    }
    );
  },
};
