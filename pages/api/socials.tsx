import { NextApiRequest, NextApiResponse } from 'next';
import {socials} from './data/socials'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Обработка запроса
  if (req.method === 'GET') {
    // Если это GET-запрос, вернуть приветствие
    res.status(200).json(socials);
  } else {
    // Если это не GET-запрос, вернуть ошибку метода
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
