import database from "better_sqlite3";


const db = new database("./database/database.db");


function getAllSectors() {
    const query = db.prepare("SELECT * FROM sector");
    const result = query.all();
    return result;
}

function getSectorById(Id) {
    const query = db.prepare("SELECT * FROM sector WHERE id = ?");
    const result = query.get(Id);
    console.log("sector by id",result);
    return result;
}



function createSector(name,number_of_companies,growth_rate,market_cap) {
    const query = db.prepare("INSERT INTO sector (name,number_of_companies,growth_rate,market_cap) VALUES (?,?,?,?)");
    const result = query.run(name,number_of_companies,growth_rate,market_cap);
    console.log("sector created successfully",result);
    return result;
}


function updatedSector(name,number_of_companies,growth_rate,market_cap) {
    const query = db.prepare("UPDATE sector SET name = ?, number_of_companies = ?, growth_rate = ?, market_cap = ? WHERE id = ?");
    const result = query.run(name,number_of_companies,growth_rate,market_cap,id);
    console.log("sector updated successfully",result);
    return result;
}



function deleteSector(id) {
    const query = db.prepare("DELETE FROM sector WHERE id = ?");
    const result = query.run(id);
    console.log("sector deleted successfully",result);
    return result;
}



export{
    getAllSectors,
    getSectorById,
    createSector,
    updatedSector,
    deleteSector
}