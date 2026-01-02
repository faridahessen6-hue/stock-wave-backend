import * as companyService from '../Services/companyService';



export default function (app) {
    
    // GET all companieS
    app.get('/company', (req, res) => {
        const company = companyService.getAllCompany();
        res.json(company);
    });


    // GET company by id
    app.get('/company/:id', (req, res) => {
        const companyId = req.params.id;
        const company = companyService.getCompanyById(companyId);
        res.json(company);
    });



    // getcompany by sectorid
    app.get('/company/sector/:sectorId', (req, res) => {
        const sectorId = req.params.sectorId;
        const companies = companyService.getCompaniesBySectorId(sectorId);
        res.json(companies);
    });






    app.get('/company/ticker/:ticker', (req, res) => {
        const ticker = req.params.ticker;
        const company = companyService.getCompanyByTicker(ticker);
        res.json(company);
    });


    // create company
    app.post('/company', (req, res) => {
        const { sectorId, name, market_cap, growth_rate, share_price, ticker, description } = req.body
        const companyId = companyService.createCompny(name, sectorId, market_cap, growth_rate, share_price, ticker, description);
        if (companyId) {
            res.status(201).json
                (
                    {
                        message: 'company created successfully',
                    }
                )
        }

        if (!companyId) {

            res.status(500).json(
                {
                    message: 'company not created',
                }
            )
        };
    });





    // update company

    app.put("/company/:id", (req, res) => {
        const companyId = req.params.id;
        const updatedData = req.body;


        res.status(200).json({
            message: "company updated successfully",
            companyId: companyId,
            newData: updatedData
        });
    });



    app.delete("/company/:id", (req, res) => {
        const companyId = req.params.id;
        res.status(200).json({
            message: "company deleted successfully",
            companyId: companyId
        });
    });
    


};
