import { getAllUsers, getUserById, createUser, updateUser, deleteUser, login } from "../Services/usersService.js";


export default function (app) {
    app.get('/users', (req, res) => {
        try {
            const users = getAllUsers();
            res.json(users);
        } catch (error) {
            console.error("Error fetching users:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });

    app.get('/users/:id', (req, res) => {
        try {
            const userId = req.params.id;
            const user = getUserById(userId);
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            console.error("Error fetching user by id:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });

    app.post('/createuser', (req, res) => {
        try {
            const { name, age, email, password, birthday, role, balance, phone, ssn } = req.body;
            const user = createUser(name, age, email, password, birthday, role, balance, phone, ssn);
            res.status(201).json(
                {
                    message: 'User created successfully',
                }
            );
        } catch (error) {
            console.error("Error creating user:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });



    app.post('/login', (req, res) => {
        try {
            const { email, password } = req.body;
            const user = login(email, password);
            if (user) {
                res.status(201).json(
                    {
                        message: 'User logged in successfully',
                        user: user
                    }
                );
            } else {
                res.status(401).json(
                    {
                        message: 'Invalid email or password',
                    }
                );
            }
        } catch (error) {
            console.error("Error during login:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });




    app.put("/users/:id", (req, res) => {
        try {
            const usersId = req.params.id;
            const { name, age, email, password, birthday, role, balance, phone, ssn } = req.body;

            const result = updateUser(usersId, name, age, email, password, birthday, role, balance, phone, ssn);

            if (result.changes > 0) {
                res.status(200).json({
                    message: "User updated successfully",
                    usersId: usersId
                });
            } else {
                res.status(404).json({
                    message: "User not found"
                });
            }
        } catch (error) {
            console.error("Error updating user:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });

    app.delete("/users/:id", (req, res) => {
        try {
            const usersId = req.params.id;
            const result = deleteUser(usersId);

            if (result.changes > 0) {
                res.status(200).json({
                    message: "User deleted successfully",
                    usersId: usersId
                });
            } else {
                res.status(404).json({
                    message: "User not found"
                });
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });

};