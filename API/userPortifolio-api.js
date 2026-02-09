import { getAllUserPortfolios, getUserPortfolioById, createUserPortfolio, updateUserPortfolio, deleteUserPortfolio } from '../Services/userPortifolioService.js';

export default function (app) {




    app.get('/userportifolios', (req, res) => {
        try {
            const userportifolios = getAllUserPortfolios();
            res.json(userportifolios);
        } catch (error) {
            console.error("Error fetching user portfolios:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });

    app.get('/userportifolio/:id', (req, res) => {
        try {
            const portfolioId = req.params.id;
            const portfolio = getUserPortfolioById(portfolioId);
            if (portfolio) {
                res.json(portfolio);
            } else {
                res.status(404).json({ message: "Portfolio not found" });
            }
        } catch (error) {
            console.error("Error fetching user portfolio by id:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });



    app.post('/userportifolios', (req, res) => {
        try {
            const { userId, companyId, total_Capital, date, growth_rate } = req.body;
            const userportifolioId = createUserPortfolio(userId, companyId, total_Capital, date, growth_rate);
            if (userportifolioId) {
                res.status(201).json({
                    message: 'Userportifolio created successfully',
                });
            } else {
                res.status(500).json({
                    message: 'Userportifolio not created',
                });
            }
        } catch (error) {
            console.error("Error creating user portfolio:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });






    app.put("/userportifolio/:id", (req, res) => {
        try {
            const userportifolioId = req.params.id;
            const { userId, companyId, total_Capital, date, growth_rate } = req.body;

            const result = updateUserPortfolio(userportifolioId, userId, companyId, total_Capital, date, growth_rate);

            if (result.changes > 0) {
                res.status(200).json({
                    message: "userportifolio updated successfully",
                    userportifolioId: userportifolioId
                });
            } else {
                res.status(404).json({
                    message: "userportifolio not found"
                });
            }
        } catch (error) {
            console.error("Error updating user portfolio:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });

    app.delete("/userportifolio/:id", (req, res) => {
        try {
            const userportifolioId = req.params.id;
            const result = deleteUserPortfolio(userportifolioId);

            if (result.changes > 0) {
                res.status(200).json({
                    message: "userportifolio deleted successfully",
                    userportifolioId: userportifolioId
                });
            } else {
                res.status(404).json({
                    message: "userportifolio not found"
                });
            }
        } catch (error) {
            console.error("Error deleting user portfolio:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });







};