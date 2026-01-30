import database from "better-sqlite3";


import path from 'path';
const dbPath = path.join(process.cwd(), 'database', 'database.db');
const db = new database(dbPath);

export function getAllOrders() {
    const query = db.prepare("SELECT * FROM orders");
    const result = query.all();
    return result;
}

export function getOrderById(id) {
    const query = db.prepare("SELECT * FROM orders WHERE id = ?");
    const result = query.get(id);
    return result;
}

export function createOrder(user_id, company_id, quantity, price, total_price, date, number_of_shares) {
    const query = db.prepare("INSERT INTO orders (user_id, company_id, quantity, price, total_price, date, number_of_shares) VALUES (?, ?, ?, ?, ?, ?, ?)");
    const result = query.run(user_id, company_id, quantity, price, total_price, date, number_of_shares);
    console.log("Order created successfully", result);
    return result.lastInsertRowid;
}

export function updateOrder(id, user_id, company_id, quantity, price, total_price, date, number_of_shares) {
    const query = db.prepare("UPDATE orders SET user_id = ?, company_id = ?, quantity = ?, price = ?, total_price = ?, date = ?, number_of_shares = ? WHERE id = ?");
    const result = query.run(user_id, company_id, quantity, price, total_price, date, number_of_shares, id);
    console.log("Order updated successfully", result);
    return result;
}

export function deleteOrder(id) {
    const query = db.prepare("DELETE FROM orders WHERE id = ?");
    const result = query.run(id);
    console.log("Order deleted successfully", result);
    return result;
}

