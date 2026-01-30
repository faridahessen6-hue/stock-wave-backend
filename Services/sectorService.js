import database from "better-sqlite3";


import path from 'path';
const dbPath = path.join(process.cwd(), 'database', 'database.db');
const db = new database(dbPath);


export function getAllSectors() {
    const query = db.prepare("SELECT * FROM sector");
    const result = query.all();
    return result;
}

export function getSectorById(Id) {
    const query = db.prepare("SELECT * FROM sector WHERE id = ?");
    const result = query.get(Id);
    console.log("sector by id", result);
    return result;
}

export function createSector(name, number_of_companies, growth_rate, market_cap) {
    const query = db.prepare("INSERT INTO sector (name,number_of_companies,growth_rate,market_cap) VALUES (?,?,?,?)");
    const result = query.run(name, number_of_companies, growth_rate, market_cap);
    console.log("sector created successfully", result);
    return result.lastInsertRowid;
}

export function updateSector(id, name, number_of_companies, growth_rate, market_cap) {
    const query = db.prepare("UPDATE sector SET name = ?, number_of_companies = ?, growth_rate = ?, market_cap = ? WHERE id = ?");
    const result = query.run(name, number_of_companies, growth_rate, market_cap, id);
    console.log("sector updated successfully", result);
    return result;
}

export function deleteSector(id) {
    const query = db.prepare("DELETE FROM sector WHERE id = ?");
    const result = query.run(id);
    console.log("sector deleted successfully", result);
    return result;
}
