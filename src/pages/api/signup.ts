import { hash } from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import openDb from "../../../--helpers/openDb"

export default async function getPersonById(req: NextApiRequest, res: NextApiResponse) {
    const db = await openDb();

    if (req.method === 'POST') {
        hash(req.body.password, 10, async function(err, hash) {
          // Store hash in your password DB.
    
          const statement = await db.prepare(
            'INSERT INTO person (name, email, password) values (?, ?, ?)'
          );
          const result = await statement.run(req.body.name, req.body.email, hash);
          result.stmt.finalize()
    
          const person = await db.all('select * from person');
          res.json(person);
        });
        // res.json({message: "gelukt"})
      } else {
        res.status(405).json({ message: 'We only support POST' });
      }
}