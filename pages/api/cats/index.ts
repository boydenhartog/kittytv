// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { Cat } from "@/types";
import cats from "../../../cats.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Cat[]>
) {
  return res.status(200).json(cats);
}
