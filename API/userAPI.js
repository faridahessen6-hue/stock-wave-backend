import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from "../Services/usersService.js";
import { createOrder } from "../Services/orderService.js";


export default function (app) {
    app.get('/users', (req, res) => {
        const users = getAllUsers();
        res.json(users);
    });

    app.post('/createuser', (req, res) => {
        const { name, email, password } = req.body;
        const user = createUser(name, email, password);
        res.status(201).json(
            {
                message: 'User created successfully',
            }
        );
    });



    
    app.put("/users/:id", (req, res) => {
        const usersId = req.params.id;
        const updatedData = req.body;


        res.status(200).json({
            message: "users updated successfully",
            usersId: usersId,
            newData: updatedData
        });
    });

    app.delete("/users :id", (req, res) => {
        const usersId = req.params.id;
        res.status(200).json({
            message: "users deleted successfully",
            usersId: usersId
        });
    });

};