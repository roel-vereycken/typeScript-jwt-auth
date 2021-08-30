import { NextApiRequest, NextApiResponse } from "next";
import openDb from "../../../../../--helpers/openDb"

export default async function getAllVehiclesByPersonId(req: NextApiRequest, res: NextApiResponse) {
    const db = await openDb();
    const allVehicles = await db.all("SELECT * FROM Vehicle WHERE ownerid = ?", [req.query.id])
    
    res.json(allVehicles)
}

