import type { VercelRequest, VercelResponse } from "@vercel/node";
import ogpParser from "ogp-parser";

export default async (request: VercelRequest, response: VercelResponse) => {
  const validateUrl = (url: string | string[]): string => {
    if (typeof url === "string") {
      return url;
    }

    return url[0];
  };
  const ogp = await ogpParser(validateUrl(request.query.url));
  response.setHeader("Access-Control-Allow-Origin", "https://shinyaigeek.dev")
  response.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  response.status(200).json(ogp);
};
