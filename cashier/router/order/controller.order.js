const connection = require("../../config/db");

const queryOrder = `
select 
* from orders
`;

const querOrderJoin = `
SELECT user.nama as nama_customer, alamat, product.nama as nama_produk, product.harga, orders.total_Harga
FROM orders
INNER JOIN user
ON orders.user_ID = user.id
INNER JOIN product
ON orders.product_ID = product.id
`
module.exports = {
  getAllOrder: (req, res) => {
    connection.query(queryOrder, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  },
  getIDOrder: (req, res) => {
    connection.query(
      `${querOrderJoin} where orders.id = ${req.params.id}`,
      (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  },

};