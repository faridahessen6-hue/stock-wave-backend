
import { getAllStocks, getStockById, createStock, updateStock, deleteStock, getStocksByCompanyId } from '../Services/stockServices.js';

export default function (app) {



    app.get('/stocks', (req, res) => {
        const stocks = getAllStocks();
        res.json(stocks);
    });



    app.post('/stocks', (req, res) => {
        const { companyId, price } = req.body;
        const stockId = createStock(companyId, price);
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
        const { companyId, price } = req.body;

        const result = updateStock(stockId, companyId, price);

        if (result.changes > 0) {
            res.status(200).json({
                message: "Stock updated successfully",
                stockId: stockId
            });
        } else {
            res.status(404).json({
                message: "Stock not found"
            });
        }
    });

    app.delete("/stocks/:id", (req, res) => {
        const stockId = req.params.id;
        const result = deleteStock(stockId);

        if (result.changes > 0) {
            res.status(200).json({
                message: "Stock deleted successfully",
                stockId: stockId
            });
        } else {
            res.status(404).json({
                message: "Stock not found"
            });
        }
    });

    app.get("/stocks/company/:companyId", (req, res) => {
        const companyId = req.params.companyId;
        const stocks = getStocksByCompanyId(companyId);

        if (stocks.length > 0) {
            res.status(200).json(stocks);
        } else {
            res.status(404).json({
                message: "No stock history found for this company"
            });
        }
    });


};