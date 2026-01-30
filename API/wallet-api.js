import { getAllWallets, getWalletById, createWallet, updateWallet, deleteWallet } from '../Services/walletServies.js';

export default function (app) {



    app.get('/wallets', (req, res) => {
        const wallets = getAllWallets();
        res.json(wallets);
    });



    app.post('/wallets', (req, res) => {
        const { userId, balance } = req.body;
        const walletId = createWallet(userId, balance);
        if (walletId) {
            res.status(201).json({
                message: 'Wallet created successfully',
            });
        } else {
            res.status(500).json({
                message: 'Wallet not created',
            });
        }
    });

    app.put("/users/:id", (req, res) => {
        const userId = req.params.id;
        const updatedData = req.body;


        res.status(200).json({
            message: "User updated successfully",
            userId: userId,
            newData: updatedData
        });
    });



    app.delete("/users/:id", (req, res) => {
        const userId = req.params.id;
        res.status(200).json({
            message: "User deleted successfully",
            userId: userId
        });
    });




};