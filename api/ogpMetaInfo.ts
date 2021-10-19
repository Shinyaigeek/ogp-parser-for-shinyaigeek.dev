import type { VercelRequest, VercelResponse } from "@vercel/node";
import ogpParser from "ogp-parser";

export default async (request: VercelRequest, response: VercelResponse) => {
  const ogp = await ogpParser("https://shinyaigeek.dev/");
  response.status(200).json(ogp);
};
