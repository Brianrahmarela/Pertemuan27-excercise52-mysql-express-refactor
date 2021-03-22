const connection = require("../../config/db");

const queryProduct = `
select 
* from product
`;

module.exports = {
  getAllProduct: (req, res) => {
    connection.query(queryProduct, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  },
  getIDProduct: (req, res) => {
    connection.query(
      `${queryProduct} where product.id = ${req.params.id}`,
      (err, data) => {
      if(err) {
        console.log(err);
      }else {
        res.json(data);
      }
    });
  },
};