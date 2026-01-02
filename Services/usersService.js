import database from "better_sqlite3";


const db = new database("./database/database.db");

function getAllUsers() {
    const query= db.prepare("SELECT * FROM users");
    const result = query.all();
    return result;
}



function getUserById(id) {
    const query = db.prepare("SELECT * FROM users WHERE id = ?");
    const result = query.get(id);
    return result;
}


function createUser( name ,age,email,password,birthday,role,balance,phone,ssn) {
    const query = db.prepare("INSERT INTO users (name, age, email, password, birthday, role, balance, phone, ssn) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    const result = query.run(name, age, email, password, birthday, role, balance, phone, ssn);
    console.log("User created successfully",result);
    return result;

}



function updateUser(id,name,age,email,password,birthday,role,balance,phone,ssn) {
    const query = db.prepare("UPDATE users SET name = ?, age = ?, email = ?, password = ?, birthday = ?, role = ?, balance = ?, phone = ?, ssn = ? WHERE id = ?");
    const result = query.run(name, age, email, password, birthday, role, balance, phone, ssn, id);
    console.log("User updated successfully",result);
    return result;
}

function deleteById(id) {
    const query = db.prepare("DELETE FROM users WHERE id = ?");
    const result = query.run(id);
    console.log("User deleted successfully",result);
    return result;
}

export default {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteById
}
