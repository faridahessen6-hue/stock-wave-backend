import database from "better_sqlite3";


const db = new database("./database/database.db");

function getAllwallet() {
    const query = db.prepare("SELECT * FROM wallet");
    const result = query.all();
    return result;
}



function getwalletById(id) {
    const query = db.prepare("SELECT * FROM wallet WHERE id = ?");
    const result = query.get(id);
    return result;
}


function createwallet(user_id, amount, type, timestamp) {
    const query = db.prepare("INSERT INTO wallet (user_id, amount, type, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?)");
    const result = query.run(user_id, amount, type, timestamp);
    console.log("User created successfully", result);
    return result;

}



function updatewallet(id, user_id, amount, type, timestamp) {
    const query = db.prepare("UPDATE wallet SET user_id = ?, amount = ?, type = ?, timestamp = ? WHERE id = ?");
    const result = query.run(user_id, amount, type, timestamp, id);
    console.log("User updated successfully", result);
    return result;
}

function deletewallet(id) {
    const query = db.prepare("DELETE FROM wallet WHERE id = ?");
    const result = query.run(id);
    console.log("User deleted successfully", result);
    return result;
}

export default {
    getAllwallet,
    getwalletById,
    createwallet,
    updatewallet,
    deletewallet
}
