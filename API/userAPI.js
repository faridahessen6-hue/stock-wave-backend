import * as usersService from '../Services/usersService';


export default function (app) {
    app.get('/users', (req, res) => {
        const users = usersService.getAllUsers();
        res.json(users);
    });

    app.post('/users', (req, res) => {
        const { name, email, password } = req.body;
        const user = usersService.createUser(name, email, password);
        res.status(201).json(
            {
                message: 'User created successfully',
            }
        );
    });




    app.post('/orders', (req, res) => {
        const { userId, bookId } = req.body
        const orderId = orderService.createOrder(userId, bookId);
        if (orderId) {
            res.status(201).json
                (
                    {
                        message: 'Order created successfully',
                    }
                )

        }

        if (!orderId) {

            res.status(500).json(
                {
                    message: 'Order not created',
                }
            )
        };

        res.status(201).json(
            {
                message: 'Order created successfully',
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