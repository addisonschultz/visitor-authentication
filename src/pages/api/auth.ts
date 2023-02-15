// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.send(`
          <p>Click <a href="/api/confirm?location=${encodeURIComponent(
            req.query.location || ""
          )}">here</a> to authenticate !</p> 
      `);
}
