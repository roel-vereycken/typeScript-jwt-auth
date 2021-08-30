import { NextApiRequest, NextApiResponse } from "next";
import openDb from "../../../--helpers/openDb"
import { authenticated } from "./people";

export default authenticated(async function getAllVehicles(req: NextApiRequest, res: NextApiResponse) {
    const db = await openDb();
    const vehicle = await db.all("SELECT * FROM Vehicle")
    
    res.json(vehicle)
})