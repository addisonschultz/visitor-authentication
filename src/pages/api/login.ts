import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.send(`
  <p>Click <a href="/api/auth">here</a> to access the documentation !</p>
`);
}
