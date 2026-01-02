import * as walletService from '../Services/walletService';

export default function (app) {



app.get('/wallets', (req, res) => {
    const wallets = walletService.getAllWallets();
    res.json(wallets);
});



app.post('/wallets', (req, res) => {
    const { userId, balance } = req.body;
    const walletId = walletService.createWallet(userId, balance);
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

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


};