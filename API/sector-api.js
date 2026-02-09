import { getAllSectors, getSectorById, createSector, updateSector, deleteSector } from '../Services/sectorService.js';



export default function (app) {

    app.get('/sectors', (req, res) => {
        try {
            const sector = getAllSectors();
            res.json(sector);
        } catch (error) {
            console.error("Error fetching sectors:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });

    app.get('/sector/:id', (req, res) => {
        try {
            const sectorId = req.params.id;
            const sector = getSectorById(sectorId);
            if (sector) {
                res.json(sector);
            } else {
                res.status(404).json({ message: "Sector not found" });
            }
        } catch (error) {
            console.error("Error fetching sector by id:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });



    app.post('/sector', (req, res) => {
        try {
            const { name, number_of_companies, growth_rate, market_cap } = req.body
            const sectorId = createSector(name, number_of_companies, growth_rate, market_cap);
            if (sectorId) {
                res.status(201).json
                    (
                        {
                            message: 'sector created successfully',
                        }
                    )
            } else {
                res.status(500).json(
                    {
                        message: 'sector not created',
                    }
                )
            };
        } catch (error) {
            console.error("Error creating sector:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });







    app.put("/sector/:id", (req, res) => {
        try {
            const sectorId = req.params.id;
            const { name, number_of_companies, growth_rate, market_cap } = req.body;

            const result = updateSector(sectorId, name, number_of_companies, growth_rate, market_cap);

            if (result.changes > 0) {
                res.status(200).json({
                    message: "sector updated successfully",
                    sectorId: sectorId
                });
            } else {
                res.status(404).json({
                    message: "sector not found"
                });
            }
        } catch (error) {
            console.error("Error updating sector:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });

    app.delete("/sector/:id", (req, res) => {
        try {
            const sectorId = req.params.id;
            const result = deleteSector(sectorId);

            if (result.changes > 0) {
                res.status(200).json({
                    message: "sector deleted successfully",
                    sectorId: sectorId
                });
            } else {
                res.status(404).json({
                    message: "sector not found"
                });
            }
        } catch (error) {
            console.error("Error deleting sector:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });



};
