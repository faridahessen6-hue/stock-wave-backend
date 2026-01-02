import database from "better_sqlite3";


const db = new database("./database/database.db");

function getAlluserPortifolio() {
    const query = db.prepare("SELECT * FROM user_portifolio");
    const result = query.all();
    return result;
}



function getUserPortifolioById(id) {
    const query = db.prepare("SELECT * FROM user_portifolio WHERE id = ?");
    const result = query.get(id);
    return result;
}


function createUserPortifolio(user_id,company_id,total_capital,date,growth_rate) {
    const query = db.prepare("INSERT INTO user_portifolio (user_id, company_id, total_capital, date, growth_rate) VALUES (?, ?, ?, ?, ?)");
    const result = query.run(user_id, company_id, total_capital, date, growth_rate);
    console.log("User created successfully", result);
    return result;

}



function updateUserPortifolio(id, user_id, company_id, total_capital, date, growth_rate) {
    const query = db.prepare("UPDATE user_portifolio SET user_id = ?, company_id = ?, total_capital = ?, date = ?, growth_rate = ? WHERE id = ?");
    const result = query.run(user_id, company_id, total_capital, date, growth_rate, id);
    console.log("User updated successfully", result);
    return result;
}

function deleteUserPortifolio(id) {
    const query = db.prepare("DELETE FROM user_portifolio WHERE id = ?");
    const result = query.run(id);
    console.log("User deleted successfully", result);
    return result;
}

export default {
    getAlluserPortifolio,
    getUserPortifolioById,
    createUserPortifolio,
    updateUserPortifolio,
    deleteUserPortifolio
}
