CREATE TABLE users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name varchar(100),
    age INTEGER,
    email varchar(100),
    password varchar(100),
    birthday date,
    role varchar(100),
    balance INTEGER,
    phone varchar(100),
    ssn varchar(20)
);
CREATE TABLE sector(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name varchar(100),
    number_of_companies INTEGER,
    growth_rate INTEGER,
    market_cap INTEGER
);
CREATE TABLE company(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name varchar(100),
    sector_id INTEGER,
    market_cap INTEGER,
    growth_rate INTEGER,
    share_price INTEGER,
    ticker varchar(10) unique,
    description varchar(1000),
    FOREIGN KEY (sector_id) REFERENCES sector(id)
);
CREATE TABLE orders(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    company_id INTEGER,
    quantity INTEGER,
    price INTEGER,
    total_price INTEGER,
    date date,
    number_of_shares INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (company_id) REFERENCES company(id)
);
create table user_portifolio(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    company_id INTEGER,
    total_capital INTEGER,
    date date,
    growth_rate INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (company_id) REFERENCES company(id)
);
CREATE TABLE stock_price_history(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    company_id INTEGER,
    price INTEGER,
    timestamp DATETIME,
    FOREIGN KEY (company_id) REFERENCES company(id)
);
create table wallet_transactions(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    amount INTEGER,
    type varchar(10),
    timestamp DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id)
)

insert into users(
        name,
        age,
        email,
        password,
        birthday,
        role,
        balance,
        phone,
        ssn
    )
values (
        'John Doe',
        25,
        'john.doe@example.com',
        'password123',
        '2000-01-01',
        'customer',
        1000,
        '1234567890',
        '123-45-6789'
    ),
    (
        'Jane Smith',
        30,
        'jane.smith@example.com',
        'password456',
        '2001-02-02',
        'dealer',
        2000,
        '0987654321',
        '456-78-9012'
    ),
    (
        'Bob Johnson',
        35,
        'bob.johnson@example.com',
        'password789',
        '2002-03-03',
        'admin',
        3000,
        '1122334455',
        '789-01-2345'
    );
SELECT *
FROM users;
insert into sector(
        name,
        number_of_companies,
        growth_rate,
        market_cap
    )
values ('Technology', 10, 10, 1000000),
    ('Finance', 5, 5, 500000),
    ('Healthcare', 8, 8, 800000);
SELECT *
FROM sector;
insert into company(
        name,
        sector_id,
        market_cap,
        growth_rate,
        share_price,
        ticker,
        description
    )
values (
        'Company A',
        1,
        1000000,
        10,
        10,
        'A',
        'Company A description'
    ),
    (
        'Company B',
        2,
        500000,
        5,
        5,
        'B',
        'Company B description'
    ),
    (
        'Company C',
        3,
        800000,
        8,
        8,
        'C',
        'Company C description'
    );
SELECT *
FROM company;
insert into orders(
        user_id,
        company_id,
        quantity,
        price,
        total_price,
        date,
        number_of_shares
    )
values (1, 1, 10, 10, 100, '2022-01-01', 10),
    (2, 2, 5, 5, 25, '2022-02-02', 5),
    (3, 3, 8, 8, 64, '2022-03-03', 8);
SELECT *
FROM orders;
insert into user_portifolio(
        user_id,
        company_id,
        total_capital,
        date,
        growth_rate
    )
values (1, 1, 1000, '2022-01-01', 10),
    (2, 2, 500, '2022-02-02', 5),
    (3, 3, 800, '2022-03-03', 8);
SELECT *
FROM user_portifolio;
INSERT INTO stock_price_history(company_id, price, timestamp)
VALUES (1, 10, '2022-01-01'),
    (2, 5, '2022-02-02'),
    (3, 8, '2022-03-03');
SELECT *
FROM stock_price_history;
insert into wallet_transactions(user_id, amount, type, timestamp)
values (1, 100, 'DEPOSIT', '2022-01-01'),
    (2, 50, 'WITHDRAW', '2022-02-02'),
    (3, 80, 'DEPOSIT', '2022-03-03');
SELECT *
FROM wallet_transactions;
-- drop TABLE user_portifolio;
-- drop TABLE stock_price_history;
-- drop TABLE wallet_transactions;
-- drop TABLE company;
-- drop TABLE sector;
-- drop TABLE users;
-- drop TABLE orders;