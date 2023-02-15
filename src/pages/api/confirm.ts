// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const gitbookSignKey = process.env.GITBOOK_JWT_KEY;
const gitbookSpaceURL = process.env.GITBOOK_URL;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = jwt.sign({}, gitbookSignKey, { expiresIn: "1h" });

  const uri = new URL(`${gitbookSpaceURL}${req.query.location || ""}`);
  uri.searchParams.set("jwt_token", token);

  res.redirect(uri.toString());
}
