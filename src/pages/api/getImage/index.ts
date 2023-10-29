import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from "node-fetch";
import OpenAI from "openai";








export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if(req.method == "GET") {
        try {
            res.status(200);
        } catch(error) {
            res.status(400);
        }
    } else {
        res.status(404);
    }
    res.end();
}

