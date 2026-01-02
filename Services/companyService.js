import Database from "better_sqlite3";


const db = new Database("./database/database.db");

function getAllcompanies() {
    const query = db.prepare("SELECT * FROM company");
    const result = query.all();
    return result;
}



function getCompanyById(id) {
    const query = db.prepare("SELECT * FROM company WHERE id = ?");
    const result = query.get(id);
    return result;
}


function getCompaniesBySectorId(sector_id) {
    const query = db.prepare("SELECT * FROM company WHERE sector_id = ?");
    const result = query.all(sector_id);
    return result;
}

function createCompany(name, sector_id, market_cap, growth_rate, share_price, ticker, description) {
    const query = db.prepare("INSERT INTO company (name, sector_id, market_cap, growth_rate, share_price, ticker, description) VALUES (?, ?, ?, ?, ?, ?, ?)");
    const result = query.run(name, sector_id, market_cap, growth_rate, share_price, ticker, description);
    console.log("User created successfully", result);
    return result;

}



function updateCompany(id, name, sector_id, market_cap, growth_rate, share_price, ticker, description) {
    const query = db.prepare("UPDATE company SET name = ?, sector_id = ?, market_cap = ?, growth_rate = ?, share_price = ?, ticker = ?, description = ? WHERE id = ?");
    const result = query.run(name, sector_id, market_cap, growth_rate, share_price, ticker, description, id);
    console.log("User updated successfully", result);
    return result;
}

function deleteCompany(id) {
    const query = db.prepare("DELETE FROM company WHERE id = ?");
    const result = query.run(id);
    console.log("User deleted successfully", result);
    return result;
}

export default {
    getAllcompanies,
    getCompanyById,
    getCompaniesBySectorId,
    createCompany,
    updateCompany,
    deleteCompany
}
