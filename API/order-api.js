import { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder, getOrdersByUserId } from '../Services/orderService.js';



export default function (app) {

    app.get('/orders', (req, res) => {
        try {
            const orders = getAllOrders();
            res.json(orders);
        } catch (error) {
            console.error("Error fetching orders:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });

    app.get('/orders/:id', (req, res) => {
        try {
            const orderId = req.params.id;
            const order = getOrderById(orderId);
            if (order) {
                res.json(order);
            } else {
                res.status(404).json({ message: "Order not found" });
            }
        } catch (error) {
            console.error("Error fetching order by id:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });

    app.get('/orders/user/:userId', (req, res) => {
        try {
            const userId = req.params.userId;
            const orders = getOrdersByUserId(userId);
            res.json(orders);
        } catch (error) {
            console.error("Error fetching orders for user:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });



    app.post('/order', (req, res) => {
        try {
            const { userId, companyId, quantity, price, totalPrice, date, numberOfShares } = req.body
            const orderId = createOrder(userId, companyId, quantity, price, totalPrice, date, numberOfShares);
            if (orderId) {
                res.status(201).json
                    (
                        {
                            message: 'Order created successfully',
                        }
                    )
            } else {
                res.status(500).json(
                    {
                        message: 'Order not created',
                    }
                )
            };
        } catch (error) {
            console.error("Error creating order:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });


    app.put("/orders/:id", (req, res) => {
        try {
            const ordersId = req.params.id;
            const { userId, companyId, quantity, price, totalPrice, date, numberOfShares } = req.body;

            const result = updateOrder(ordersId, userId, companyId, quantity, price, totalPrice, date, numberOfShares);

            if (result.changes > 0) {
                res.status(200).json({
                    message: "orders updated successfully",
                    ordersId: ordersId
                });
            } else {
                res.status(404).json({
                    message: "orders not found"
                });
            }
        } catch (error) {
            console.error("Error updating order:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });


    app.delete("/orders/:id", (req, res) => {
        try {
            const ordersId = req.params.id;
            const result = deleteOrder(ordersId);

            if (result.changes > 0) {
                res.status(200).json({
                    message: "orders deleted successfully",
                    ordersId: ordersId
                });
            } else {
                res.status(404).json({
                    message: "orders not found"
                });
            }
        } catch (error) {
            console.error("Error deleting order:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });



};



