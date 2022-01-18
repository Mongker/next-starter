// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { dataFake2 } from 'core/dataFake/dataFake';

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  // @ts-ignore
  res.status(200).json(dataFake2);
}
