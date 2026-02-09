import { getAllUserPortfolios, getUserPortfolioById, createUserPortfolio, updateUserPortfolio, deleteUserPortfolio } from '../Services/userPortifolioService.js';

export default function (app) {




    app.get('/userportifolios', (req, res) => {
        const userportifolios = getAllUserPortfolios();
        res.json(userportifolios);
    });



    app.post('/userportifolios', (req, res) => {
        const { userId, companyId,total_Capital, date,growth_rate,company_name } = req.body;
        const userportifolioId = createUserPortfolio(userId, companyId,total_Capital, date,growth_rate,company_name);
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







};