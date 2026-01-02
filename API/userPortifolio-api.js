import * as userportifolioService from '../Services/userportifolioService';

export default function (app) {




app.get('/userportifolios', (req, res) => {
    const userportifolios = userportifolioService.getAllUserportifolios();
    res.json(userportifolios);
});



app.post('/userportifolios', (req, res) => {
    const { userId, bookId } = req.body;
    const userportifolioId = userportifolioService.createUserportifolio(userId, bookId);
    if (userportifolioId) {
        res.status(201).json({
            message: 'Userportifolio created successfully',
        });
    } else {
        res.status(500).json({
            message: 'Userportifolio not created',
        });
    }
});






app.put("/userportifolio/:id", (req, res) => {
    const userportifolioId = req.params.id;  
    const updatedData = req.body;   
    

    res.status(200).json({
            message: "userportifolio updated successfully",
            userportifolioId: userportifolioId,
            newData: updatedData
    });
});

app.delete("/userportifolio :id", (req, res) => {
    const userportifolioId = req.params.id;
    res.status(200).json({
        message: "userportifolio deleted successfully",
        userportifolioId: userportifolioId
    });
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});



};