import { getAllWallets, getWalletById, createWallet, updateWallet, deleteWallet } from '../Services/walletServices.js';

export default function (app) {



    app.get('/wallets', (req, res) => {
        try {
            const wallets = getAllWallets();
            res.json(wallets);
        } catch (error) {
            console.error("Error fetching wallets:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });

    app.get('/wallets/:id', (req, res) => {
        try {
            const walletId = req.params.id;
            const wallet = getWalletById(walletId);
            res.json(wallet);
        } catch (error) {
            console.error("Error fetching wallet transaction:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });



    app.post('/wallets', (req, res) => {
        try {
            const { userId, amount, type } = req.body;
            const walletId = createWallet(userId, amount, type);
            if (walletId) {
                res.status(201).json({
                    message: 'Wallet transaction created successfully',
                });
            } else {
                res.status(500).json({
                    message: 'Wallet transaction not created',
                });
            }
        } catch (error) {
            console.error("Error creating wallet transaction:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });

    app.put("/wallets/:id", (req, res) => {
        try {
            const walletId = req.params.id;
            const { userId, amount, type } = req.body;

            const result = updateWallet(walletId, userId, amount, type);

            if (result.changes > 0) {
                res.status(200).json({
                    message: "Wallet transaction updated successfully",
                    walletId: walletId
                });
            } else {
                res.status(404).json({
                    message: "Wallet transaction not found"
                });
            }
        } catch (error) {
            console.error("Error updating wallet transaction:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });



    app.delete("/wallets/:id", (req, res) => {
        try {
            const walletId = req.params.id;
            const result = deleteWallet(walletId);

            if (result.changes > 0) {
                res.status(200).json({
                    message: "Wallet transaction deleted successfully",
                    walletId: walletId
                });
            } else {
                res.status(404).json({
                    message: "Wallet transaction not found"
                });
            }
        } catch (error) {
            console.error("Error deleting wallet transaction:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });




};