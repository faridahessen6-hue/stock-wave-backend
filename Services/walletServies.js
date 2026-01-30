import database from "better-sqlite3";


import path from 'path';
const dbPath = path.join(process.cwd(), 'database', 'database.db');
const db = new database(dbPath);

export function getAllWallets() {
    const query = db.prepare("SELECT * FROM wallet_transactions");
    const result = query.all();
    return result;
}

export function getWalletById(id) {
    const query = db.prepare("SELECT * FROM wallet_transactions WHERE id = ?");
    const result = query.get(id);
    return result;
}

export function createWallet(user_id, amount, type, timestamp) {
    const query = db.prepare("INSERT INTO wallet_transactions (user_id, amount, type, timestamp) VALUES (?, ?, ?, ?)");
    const result = query.run(user_id, amount, type, timestamp);
    console.log("Wallet transaction created successfully", result);
    return result.lastInsertRowid;
}

export function updateWallet(id, user_id, amount, type, timestamp) {
    const query = db.prepare("UPDATE wallet_transactions SET user_id = ?, amount = ?, type = ?, timestamp = ? WHERE id = ?");
    const result = query.run(user_id, amount, type, timestamp, id);
    console.log("Wallet transaction updated successfully", result);
    return result;
}

export function deleteWallet(id) {
    const query = db.prepare("DELETE FROM wallet_transactions WHERE id = ?");
    const result = query.run(id);
    console.log("Wallet transaction deleted successfully", result);
    return result;
}

