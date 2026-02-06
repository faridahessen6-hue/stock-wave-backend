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
    ),
    (
        'Alice Williams',
        28,
        'alice.williams@example.com',
        'password101',
        '2000-04-04',
        'customer',
        1500,
        '1234567891',
        '111-22-3333'
    ),
    (
        'Charlie Brown',
        32,
        'charlie.brown@example.com',
        'password102',
        '1999-05-05',
        'customer',
        2500,
        '1234567892',
        '222-33-4444'
    ),
    (
        'Diana Garcia',
        26,
        'diana.garcia@example.com',
        'password103',
        '2001-06-06',
        'dealer',
        1800,
        '1234567893',
        '333-44-5555'
    ),
    (
        'Edward Davis',
        40,
        'edward.davis@example.com',
        'password104',
        '1998-07-07',
        'admin',
        5000,
        '1234567894',
        '444-55-6666'
    ),
    (
        'Fiona Martinez',
        24,
        'fiona.martinez@example.com',
        'password105',
        '2002-08-08',
        'customer',
        900,
        '1234567895',
        '555-66-7777'
    ),
    (
        'George Miller',
        29,
        'george.miller@example.com',
        'password106',
        '2000-09-09',
        'customer',
        2200,
        '1234567896',
        '666-77-8888'
    ),
    (
        'Hannah Taylor',
        33,
        'hannah.taylor@example.com',
        'password107',
        '1999-10-10',
        'dealer',
        3200,
        '1234567897',
        '777-88-9999'
    );

insert into sector(
        name,
        number_of_companies,
        growth_rate,
        market_cap
    )
values ('Technology', 10, 10, 1000000),
    ('Finance', 5, 5, 500000),
    ('Healthcare', 8, 8, 800000),
    ('Energy', 7, 6, 700000),
    ('Consumer Goods', 12, 7, 1200000),
    ('Real Estate', 6, 4, 600000),
    ('Telecommunications', 4, 5, 400000),
    ('Automotive', 5, 3, 500000),
    ('Retail', 9, 6, 900000),
    ('Aerospace & Defense', 3, 8, 300000);

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
        'CMPA',
        'Company A description'
    ),
    (
        'Company B',
        2,
        500000,
        5,
        5,
        'CMPB',
        'Company B description'
    ),
    (
        'Company C',
        3,
        800000,
        8,
        8,
        'CMPC',
        'Company C description'
    ),
    (
        'Company D',
        1,
        950000,
        12,
        15,
        'CMPD',
        'Company D description'
    ),
    (
        'Company E',
        4,
        700000,
        7,
        12,
        'CMPE',
        'Company E description'
    ),
    (
        'Company F',
        5,
        1200000,
        9,
        18,
        'CMPF',
        'Company F description'
    ),
    (
        'Company G',
        6,
        600000,
        4,
        8,
        'CMPG',
        'Company G description'
    ),
    (
        'Company H',
        7,
        400000,
        6,
        11,
        'CMPH',
        'Company H description'
    ),
    (
        'Company I',
        8,
        500000,
        3,
        9,
        'CMPI',
        'Company I description'
    ),
    (
        'Company J',
        9,
        900000,
        7,
        14,
        'CMPJ',
        'Company J description'
    );

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
    (3, 3, 8, 8, 64, '2022-03-03', 8),
    (4, 4, 12, 15, 180, '2022-04-04', 12),
    (5, 5, 7, 12, 84, '2022-05-05', 7),
    (6, 6, 15, 18, 270, '2022-06-06', 15),
    (7, 7, 6, 8, 48, '2022-07-07', 6),
    (8, 8, 9, 11, 99, '2022-08-08', 9),
    (9, 9, 4, 9, 36, '2022-09-09', 4),
    (10, 10, 11, 14, 154, '2022-10-10', 11);

insert into user_portifolio(
        user_id,
        company_id,
        total_capital,
        date,
        growth_rate
    )
values (1, 1, 1000, '2022-01-01', 10),
    (2, 2, 500, '2022-02-02', 5),
    (3, 3, 800, '2022-03-03', 8),
    (4, 4, 1200, '2022-04-04', 12),
    (5, 5, 900, '2022-05-05', 7),
    (6, 6, 1500, '2022-06-06', 9),
    (7, 7, 700, '2022-07-07', 4),
    (8, 8, 1100, '2022-08-08', 6),
    (9, 9, 600, '2022-09-09', 3),
    (10, 10, 1300, '2022-10-10', 8);

INSERT INTO stock_price_history(company_id, price, timestamp)
VALUES (1, 10, '2022-01-01'),
    (2, 5, '2022-02-02'),
    (3, 8, '2022-03-03'),
    (4, 15, '2022-04-04'),
    (5, 12, '2022-05-05'),
    (6, 18, '2022-06-06'),
    (7, 8, '2022-07-07'),
    (8, 11, '2022-08-08'),
    (9, 9, '2022-09-09'),
    (10, 14, '2022-10-10');

insert into wallet_transactions(user_id, amount, type, timestamp)
values (1, 100, 'DEPOSIT', '2022-01-01'),
    (2, 50, 'WITHDRAW', '2022-02-02'),
    (3, 80, 'DEPOSIT', '2022-03-03'),
    (4, 120, 'DEPOSIT', '2022-04-04'),
    (5, 75, 'WITHDRAW', '2022-05-05'),
    (6, 150, 'DEPOSIT', '2022-06-06'),
    (7, 60, 'WITHDRAW', '2022-07-07'),
    (8, 110, 'DEPOSIT', '2022-08-08'),
    (9, 45, 'WITHDRAW', '2022-09-09'),
    (10, 200, 'DEPOSIT', '2022-10-10');
