
import { getAllStocks, getStockById, createStock, updateStock, deleteStock, getStocksByCompanyId } from '../Services/stockServices.js';

export default function (app) {



    app.get('/stocks', (req, res) => {
        try {
            const stocks = getAllStocks();
            res.json(stocks);
        } catch (error) {
            console.error("Error fetching stocks:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });

    app.get('/stocks/:id', (req, res) => {
        try {
            const stockId = req.params.id;
            const stock = getStockById(stockId);
            if (stock) {
                res.json(stock);
            } else {
                res.status(404).json({ message: "Stock history not found" });
            }
        } catch (error) {
            console.error("Error fetching stock by id:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });



    app.post('/stocks', (req, res) => {
        try {
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
        } catch (error) {
            console.error("Error creating stock history:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });


    app.put("/stocks/:id", (req, res) => {
        try {
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
        } catch (error) {
            console.error("Error updating stock history:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });

    app.delete("/stocks/:id", (req, res) => {
        try {
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
        } catch (error) {
            console.error("Error deleting stock history:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });

    app.get("/stocks/company/:companyId", (req, res) => {
        try {
            const companyId = req.params.companyId;
            const stocks = getStocksByCompanyId(companyId);

            if (stocks.length > 0) {
                res.status(200).json(stocks);
            } else {
                res.status(404).json({
                    message: "No stock history found for this company"
                });
            }
        } catch (error) {
            console.error("Error fetching stocks by company id:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });


};