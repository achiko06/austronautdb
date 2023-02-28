import type { NextApiRequest, NextApiResponse } from 'next';

import { 
  singleUserQuery, 
 } from './../../../utils/queries';
import { client } from '../../../utils/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { email } = req.query;

    const query = singleUserQuery(email);

    const user = await client.fetch(query);

    const data = { 
      user: user[0], 
    };

    res.status(200).json(data);
  }
}