import { getAllSectors, getSectorById, createSector, updateSector, deleteSector } from '../Services/sectorService.js';



export default function (app) {

    app.get('/sector', (req, res) => {
        const sector = getAllSectors();
        res.json(sector);
    });



    app.post('/sector', (req, res) => {
        const { name, number_of_companies, growth_rate, market_cap, description } = req.body
        const sectorId = createSector(name, number_of_companies, market_cap, growth_rate, description);
        if (sectorId) {
            res.status(201).json
                (
                    {
                        message: 'sector created successfully',
                    }
                )
        }

        if (!sectorId) {

            res.status(500).json(
                {
                    message: 'sector not created',
                }
            )
        };
    });







    app.put("/sector/:id", (req, res) => {
        const sectorId = req.params.id;
        const updatedData = req.body;


        res.status(200).json({
            message: "sector updated successfully",
            sectorId: sectorId,
            newData: updatedData
        });
    });

    app.delete("/sector/:id", (req, res) => {
        const sectorId = req.params.id;
        res.status(200).json({
            message: "sector deleted successfully",
            sectorId: sectorId
        });
    });



};
