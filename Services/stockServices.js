import database from "better_sqlite3";


const db = new database("./database/database.db");

function getAllstock() {
    const query = db.prepare("SELECT * FROM stock");
    const result = query.all();
    return result;
}



function getstockById(id) {
    const query = db.prepare("SELECT * FROM stock WHERE id = ?");
    const result = query.get(id);
    return result;
}


function createstock(company_id, stock_price, timestamp) {
    const query = db.prepare("INSERT INTO stock (company_id, stock_price, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?)");
    const result = query.run(company_id, stock_price, timestamp);
    console.log("User created successfully", result);
    return result;

}



function updatestock(id, company_id, stock_price, timestamp) {
    const query = db.prepare("UPDATE stock SET company_id = ?, stock_price = ?, timestamp = ? WHERE id = ?");
    const result = query.run(company_id, stock_price, timestamp, id);
    console.log("User updated successfully", result);
    return result;
}

function deletestock(id) {
    const query = db.prepare("DELETE FROM stock WHERE id = ?");
    const result = query.run(id);
    console.log("User deleted successfully", result);
    return result;
}

export default {
    getAllstock,
    getstockById,
    createstock,
    updatestock,
    deletestock
}
