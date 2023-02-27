import { personDetailQuery } from '@/utils/queries';
import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../../utils/client';

export default async function handler( req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id } = req.query;
    const query = personDetailQuery(id);
    const data = await client.fetch(query);

    res.status(200).json(data[0]);
  } else if (req.method === 'PUT') {
    if (req.body._type === 'person') {
      const { 
        itemId,
        name,
        surname,
        birthDate,
        power,
        slug
      } = req.body;

      const data = await client
        .patch(itemId)
        .set({
          name,
          surname,
          birthDate,
          power,
          slug
        })
        .commit();

      res.status(200).json(data);
    } 

  } else if (req.method === 'DELETE') {
    const { id }: any = req.query;

    const data = 
    await client
      .delete(id)
      .then(console.log)
      .catch(console.error)

    res.status(200).json(data);

  }
}