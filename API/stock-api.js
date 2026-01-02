import * as stockService from '../Services/stockService';

export default function (app) {



app.get('/stocks', (req, res) => {
    const stocks = stockService.getAllStocks();
    res.json(stocks);
});



app.post('/stocks', (req, res) => {
    const { bookId, quantity } = req.body;
    const stockId = stockService.createStock(bookId, quantity);
    if (stockId) {
        res.status(201).json({
            message: 'Stock created successfully',
        });
    } else {
        res.status(500).json({
            message: 'Stock not created',
        });
    }
});


app.put("/stocks/:id", (req, res) => {
    const stockId = req.params.id;  
    const updatedData = req.body;   
    

    res.status(200).json({
            message: "stocks updated successfully",
            stockId: stockId,
            newData: updatedData
    });
});

app.delete("/stocks/:id", (req, res) => {
    const stockId = req.params.id;
    res.status(200).json({
        message: "stocks deleted successfully",
        stockId: stockId
    });
});


};