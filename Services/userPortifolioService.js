import Database from "better-sqlite3";


import path from 'path';
const dbPath = path.join(process.cwd(), 'database', 'database.db');
const db = new Database(dbPath);

export function getAllUserPortfolios() {
    const query = db.prepare("SELECT * FROM user_portifolio");
    const result = query.all();
    return result;
}

export function getUserPortfolioById(id) {
    const query = db.prepare("SELECT * FROM user_portifolio WHERE id = ?");
    const result = query.get(id);
    return result;
}

export function createUserPortfolio(user_id, company_id, total_capital, date, growth_rate) {
    const query = db.prepare("INSERT INTO user_portifolio (user_id, company_id, total_capital, date, growth_rate) VALUES (?, ?, ?, ?, ?)");
    const result = query.run(user_id, company_id, total_capital, date, growth_rate);
    console.log("User portfolio created successfully", result);
    return result.lastInsertRowid;
}

export function updateUserPortfolio(id, user_id, company_id, total_capital, date, growth_rate) {
    const query = db.prepare("UPDATE user_portifolio SET user_id = ?, company_id = ?, total_capital = ?, date = ?, growth_rate = ? WHERE id = ?");
    const result = query.run(user_id, company_id, total_capital, date, growth_rate, id);
    console.log("User portfolio updated successfully", result);
    return result;
}

export function deleteUserPortfolio(id) {
    const query = db.prepare("DELETE FROM user_portifolio WHERE id = ?");
    const result = query.run(id);
    console.log("User portfolio deleted successfully", result);
    return result;
}

