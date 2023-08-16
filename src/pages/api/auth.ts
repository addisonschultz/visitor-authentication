// @ts-nocheck
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.send(`
          <p>Click <a href="/api/confirm?location=${encodeURIComponent(
            req.query.location || ""
          )}">here</a> to authenticate !</p> 
      `);
}
