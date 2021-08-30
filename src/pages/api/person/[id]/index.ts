import { NextApiRequest, NextApiResponse } from "next";
import openDb from "../../../../../--helpers/openDb"

export default async function getPersonById(req: NextApiRequest, res: NextApiResponse) {
    const db = await openDb();

    if (req.method === 'PUT') {
        const statement = await db.prepare(
          'UPDATE person SET name= ?, email = ? where id = ?'
        );
        const result = await statement.run(
          req.body.name,
          req.body.email,
          req.query.id
        );
        result
      }
    const person = await db.all("SELECT * FROM Person WHERE id = ?", [req.query.id])
    
    res.json(person)
}