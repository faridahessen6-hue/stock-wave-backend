import database from "better_sqlite3";


const db = new database("./database/database.db");

function getAllorders() {
    const query = db.prepare("SELECT * FROM orders");
    const result = query.all();
    return result;
}



function getorderById(id) {
    const query = db.prepare("SELECT * FROM orders WHERE id = ?");
    const result = query.get(id);
    return result;
}


function createorder(user_id,company_id,quantity,price,total_price,date,number_of_shares) {
    const query = db.prepare("INSERT INTO orders (user_id, company_id, quantity, price, total_price, date, number_of_shares) VALUES (?, ?, ?, ?, ?, ?, ?)");
    const result = query.run(user_id, company_id, quantity, price, total_price, date, number_of_shares);
    console.log("User created successfully", result);
    return result;

}



function updateorder(id, user_id, company_id, quantity, price, total_price, date, number_of_shares) {
    const query = db.prepare("UPDATE orders SET user_id = ?, company_id = ?, quantity = ?, price = ?, total_price = ?, date = ?, number_of_shares = ? WHERE id = ?");
    const result = query.run(user_id, company_id, quantity, price, total_price, date, number_of_shares, id);
    console.log("User updated successfully", result);
    return result;
}

function deleteorder(id) {
    const query = db.prepare("DELETE FROM orders WHERE id = ?");
    const result = query.run(id);
    console.log("User deleted successfully", result);
    return result;
}

export default {
    getAllorders,
    getorderById,
    createorder,
    updateorder,
    deleteorder
}
