import Database from "better-sqlite3";


import path from 'path';
const dbPath = path.join(process.cwd(), 'database', 'database.db');
const db = new Database(dbPath);

export function getAllUsers() {
    const query = db.prepare("SELECT * FROM users");
    const result = query.all();
    return result;
}

export function getUserById(id) {
    const query = db.prepare("SELECT * FROM users WHERE id = ?");
    const result = query.get(id);
    return result;
}

export function createUser(name, age, email, password, birthday, role, balance, phone, ssn) {
    const query = db.prepare("INSERT INTO users (name, age, email, password, birthday, role, balance, phone, ssn) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    const result = query.run(name, age, email, password, birthday, role, balance, phone, ssn);
    console.log("User created successfully", result);
    return result.lastInsertRowid;
}

export function updateUser(id, name, age, email, password, birthday, role, balance, phone, ssn) {
    const query = db.prepare("UPDATE users SET name = ?, age = ?, email = ?, password = ?, birthday = ?, role = ?, balance = ?, phone = ?, ssn = ? WHERE id = ?");
    const result = query.run(name, age, email, password, birthday, role, balance, phone, ssn, id);
    console.log("User updated successfully", result);
    return result;
}

export function deleteUser(id) {
    const query = db.prepare("DELETE FROM users WHERE id = ?");
    const result = query.run(id);
    console.log("User deleted successfully", result);
    return result;
}

export function login(email, password) {
    const query = db.prepare("SELECT * FROM users WHERE email = ? AND password = ?");
    const result = query.get(email, password);
    return result;
}
