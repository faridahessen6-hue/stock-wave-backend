import { getAllCompanies, getCompanyById, getCompaniesBySectorId, getCompanyByTicker, createCompany, updateCompany, deleteCompany } from '../Services/companyService.js';



export default function (app) {

    // GET all companieS
    app.get('/companies', (req, res) => {
        try {
            const company = getAllCompanies();
            res.json(company);
        } catch (error) {
            console.error("Error fetching companies:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });


    // getcompany by sectorid
    app.get('/company/sector/:sectorId', (req, res) => {
        try {
            const sectorId = req.params.sectorId;
            const companies = getCompaniesBySectorId(sectorId);
            res.json(companies);
        } catch (error) {
            console.error("Error fetching companies by sector:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });

    app.get('/company/ticker/:ticker', (req, res) => {
        try {
            const ticker = req.params.ticker;
            const company = getCompanyByTicker(ticker);
            res.json(company);
        } catch (error) {
            console.error("Error fetching company by ticker:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });


    // GET company by id
    app.get('/company/:id', (req, res) => {
        try {
            const companyId = req.params.id;
            const company = getCompanyById(companyId);
            res.json(company);
        } catch (error) {
            console.error("Error fetching company by id:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });









    // create company
    app.post('/company', (req, res) => {
        try {
            const { sectorId, name, market_cap, growth_rate, share_price, ticker, description } = req.body
            const companyId = createCompany(name, sectorId, market_cap, growth_rate, share_price, ticker, description);
            if (companyId) {
                res.status(201).json
                    (
                        {
                            message: 'company created successfully',
                        }
                    )
            } else {
                res.status(500).json(
                    {
                        message: 'company not created',
                    }
                )
            };
        } catch (error) {
            console.error("Error creating company:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });





    // update company

    app.put("/company/:id", (req, res) => {
        try {
            const companyId = req.params.id;
            const { name, sectorId, market_cap, growth_rate, share_price, ticker, description } = req.body;

            const result = updateCompany(companyId, name, sectorId, market_cap, growth_rate, share_price, ticker, description);

            if (result.changes > 0) {
                res.status(200).json({
                    message: "company updated successfully",
                    companyId: companyId
                });
            } else {
                res.status(404).json({
                    message: "company not found"
                });
            }
        } catch (error) {
            console.error("Error updating company:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });



    app.delete("/company/:id", (req, res) => {
        try {
            const companyId = req.params.id;
            const result = deleteCompany(companyId);

            if (result.changes > 0) {
                res.status(200).json({
                    message: "company deleted successfully",
                    companyId: companyId
                });
            } else {
                res.status(404).json({
                    message: "company not found"
                });
            }
        } catch (error) {
            console.error("Error deleting company:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });



};
