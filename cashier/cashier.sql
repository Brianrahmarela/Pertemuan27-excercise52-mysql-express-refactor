CREATE DATABASE cashier;

use cashier;

CREATE TABLE user (
	id int PRIMARY KEY auto_increment,
    nama varchar(50),
    alamat varchar(255),
    kode_pos varchar(10)
);

INSERT INTO user (nama, alamat, kode_pos) VALUES
('andi', 'Jl.jalan', '16417'),
('budi', 'Jl.tamrin', '16418'),
('charlie', 'Jl.kemang', '16419'),
('mawar', 'Jl.margonda', '16411'),
('susi', 'Jl.banana', '16412');

CREATE TABLE product (
	id int PRIMARY KEY auto_increment,
    nama varchar(50),
    deskripsi varchar(255),
    harga int
);

INSERT INTO product (nama, deskripsi, harga) VALUES
('buku', 'buku komik', 20000),
('bangku', 'bangku teras', 50000),
('botol', 'botol minum', 5000),
('gelas', 'gelas minum', 2000),
('sepeda', 'sepeda lipat', 300000);

CREATE TABLE orders (
	id int PRIMARY KEY auto_increment,
    user_ID int,
    product_ID int,
    tanggal date,
    total_harga int,
    FOREIGN KEY(user_ID) references user(id),
    FOREIGN KEY(product_ID) references product(id)
);

INSERT INTO orders (user_ID, product_ID, tanggal, total_harga) VALUES
(1, 1, '2021-02-17',20000),
(2, 2, '2021-02-18',50000),
(3, 3, '2021-02-19',5000),
(4, 4, '2021-02-20',2000),
(5, 5, '2021-02-21',300000);