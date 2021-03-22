const express = require("express");
const mysql = require('mysql2')

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

//buat koneksi utk mysql
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "stores",
});

//tes koneksi
connection.connect((err) => {
  if(err){
    console.log(err.sqlMessage);
  } else {
    console.log("berhasil konek database");
  }
})

//queries to database
//query utk ambil semua data student dari tabel user
const queryAllUser = `
  select 
  *
  from user
`;

//query utk ambil semua data student dari tabel product
const queryAllProduct = `
  select 
  *
  from product
`;

//query utk ambil semua data student dari tabel orders
const queryAllOrders = `
  select 
  *
  from orders
`;

// const queryStudent = `
//   select 
//   student.id,
//   student.name,
//   student.email,
//   student.birth_date,
//   student.class_id
//   from student join class
//   on student.class_id = class.id
// `;


app.get("/", (req, res) => {
  res.json("hello world, berhasil konek database stores");
});

//query all USER
app.get('/user', (req, res) => {
  //mengeksekusi queries
  connection.query(queryAllUser,
    (err, data) => {
      if(err) {
        console.log(err);
      }else {
        res.json(data);
      }
    }
  );
});

//query ambil id user
app.get('/user/:id', (req, res) => {
  connection.query(
    `${queryAllUser} where user.id = ${req.params.id}`,
    (err, data) => {
    if(err) {
      console.log(err);
    }else {
      res.json(data);
    }
  }
  );
});

//query all PRODUCT
app.get('/product', (req, res) => {
  //mengeksekusi queries
  connection.query(queryAllProduct,
    (err, data) => {
      if(err) {
        console.log(err);
      }else {
        res.json(data);
      }
    }
  );
});

//query ambil id prduct
app.get('/product/:id', (req, res) => {
  connection.query(
    `${queryAllProduct} where product.id = ${req.params.id}`,
    (err, data) => {
    if(err) {
      console.log(err);
    }else {
      res.json(data);
    }
  }
  );
});

//query all ORDERS
app.get('/orders', (req, res) => {
  //mengeksekusi queries
  connection.query(queryAllOrders,
    (err, data) => {
      if(err) {
        console.log(err);
      }else {
        res.json(data);
      }
    }
  );
});

//query ambil id orders
app.get('/orders/:id', (req, res) => {
  connection.query(
    `${queryAllOrders} where orders.id = ${req.params.id}`,
    (err, data) => {
    if(err) {
      console.log(err);
    }else {
      res.json(data);
    }
  }
  );
});

//jalanka port server localhost 
app.listen(PORT, () => {
  console.log("tes jalan");
})