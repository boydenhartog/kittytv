// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { Cat } from "@/types";
import Cats from "../../../cats.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Cat>
) {
  const { slug } = req.query;
  const cat = Cats.find((cat) => cat.slug === slug);

  if (!cat) return res.status(404).end("Cat not found");

  return res.status(200).json(cat);
}
