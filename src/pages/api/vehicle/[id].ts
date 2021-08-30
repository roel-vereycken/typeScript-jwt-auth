import { NextApiRequest, NextApiResponse } from "next";
import openDb from "../../../../--helpers/openDb"

export default async function getVehicleById(req: NextApiRequest, res: NextApiResponse) {
    const db = await openDb();
    const vehicle = await db.get("SELECT * FROM Vehicle WHERE id = ?", [req.query.id])
    
    res.json(vehicle)
}