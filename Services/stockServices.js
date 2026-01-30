import database from "better-sqlite3";


import path from 'path';
const dbPath = path.join(process.cwd(), 'database', 'database.db');
const db = new database(dbPath);

export function getAllStocks() {
    const query = db.prepare("SELECT * FROM stock_price_history");
    const result = query.all();
    return result;
}

export function getStockById(id) {
    const query = db.prepare("SELECT * FROM stock_price_history WHERE id = ?");
    const result = query.get(id);
    return result;
}

export function createStock(company_id, price, timestamp) {
    const query = db.prepare("INSERT INTO stock_price_history (company_id, price, timestamp) VALUES (?, ?, ?)");
    const result = query.run(company_id, price, timestamp);
    console.log("Stock history created successfully", result);
    return result.lastInsertRowid;
}

export function updateStock(id, company_id, price, timestamp) {
    const query = db.prepare("UPDATE stock_price_history SET company_id = ?, price = ?, timestamp = ? WHERE id = ?");
    const result = query.run(company_id, price, timestamp, id);
    console.log("Stock history updated successfully", result);
    return result;
}

export function deleteStock(id) {
    const query = db.prepare("DELETE FROM stock_price_history WHERE id = ?");
    const result = query.run(id);
    console.log("Stock history deleted successfully", result);
    return result;
}

