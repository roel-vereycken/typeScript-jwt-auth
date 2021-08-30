import { compare } from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import openDb from "../../../--helpers/openDb"
import { sign } from 'jsonwebtoken'
import { secret } from "../../../api/secret";
import cookie from "cookie"

export default async function login(req: NextApiRequest, res: NextApiResponse) {
    const db = await openDb();

    if (req.method === 'POST') {
        const person: any = await db.get('select * from person where email = ?' , [req.body.email]);

        compare(req.body.password, person.password, async function(err, result) {
          // Store hash in your password DB.
          
            if(!err && result) {
                const claims = {sub: person.id, myPersonName: person.email}
                const jwt = sign(claims, secret, {expiresIn: "1h"})
                res.setHeader("Set-Cookie", cookie.serialize('auth', jwt, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== "development",
                    sameSite: "strict",
                    maxAge: 3600,
                    path: "/"
                }) )
                res.json({message: "Welcome back"})
            }
            else {
                res.json({message: "Something went wrong"})
            }
        });
        // res.json({message: "gelukt"})
      } else {
        res.status(405).json({ message: 'We only support POST' });
      }
}