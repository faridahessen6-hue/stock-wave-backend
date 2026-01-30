import Database from "better-sqlite3";


import path from 'path';
const dbPath = path.join(process.cwd(), 'database', 'database.db');
const db = new Database(dbPath);

export function getAllCompanies() {
    const query = db.prepare("SELECT * FROM company");
    const result = query.all();
    return result;
}

export function getCompanyById(id) {
    const query = db.prepare("SELECT * FROM company WHERE id = ?");
    const result = query.get(id);
    return result;
}

export function getCompaniesBySectorId(sector_id) {
    const query = db.prepare("SELECT * FROM company WHERE sector_id = ?");
    const result = query.all(sector_id);
    return result;
}

export function getCompanyByTicker(ticker) {
    const query = db.prepare("SELECT * FROM company WHERE ticker = ?");
    const result = query.get(ticker);
    return result;
}

export function createCompany(name, sector_id, market_cap, growth_rate, share_price, ticker, description) {
    const query = db.prepare("INSERT INTO company (name, sector_id, market_cap, growth_rate, share_price, ticker, description) VALUES (?, ?, ?, ?, ?, ?, ?)");
    const result = query.run(name, sector_id, market_cap, growth_rate, share_price, ticker, description);
    console.log("Company created successfully", result);
    return result.lastInsertRowid;
}

export function updateCompany(id, name, sector_id, market_cap, growth_rate, share_price, ticker, description) {
    const query = db.prepare("UPDATE company SET name = ?, sector_id = ?, market_cap = ?, growth_rate = ?, share_price = ?, ticker = ?, description = ? WHERE id = ?");
    const result = query.run(name, sector_id, market_cap, growth_rate, share_price, ticker, description, id);
    console.log("Company updated successfully", result);
    return result;
}

export function deleteCompany(id) {
    const query = db.prepare("DELETE FROM company WHERE id = ?");
    const result = query.run(id);
    console.log("Company deleted successfully", result);
    return result;
}

