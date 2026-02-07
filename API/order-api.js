import { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder } from '../Services/orderService.js';



export default function (app) {

    app.get('/orders', (req, res) => {
        const orders = getAllOrders();
        res.json(orders);
    });



    app.post('/order', (req, res) => {
        const { userId, companyId, quantity, price, totalPrice, date, numberOfShares } = req.body
        const orderId = createOrder(userId, companyId, quantity, price, totalPrice, date, numberOfShares);
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
    });







    app.put("/orders/:id", (req, res) => {
        const ordersId = req.params.id;
        const updatedData = req.body;


        res.status(200).json({
            message: "orders updated successfully",
            ordersId: ordersId,
            newData: updatedData
        });
    });

    app.delete("/orders/:id", (req, res) => {
        const ordersId = req.params.id;
        res.status(200).json({
            message: "orders deleted successfully",
            ordersId: ordersId
        });
    });



};
