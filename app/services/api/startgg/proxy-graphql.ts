import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await fetch('https://api.smash.gg/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_START_GG_API_KEY}`, 
      },
      body: JSON.stringify(req.body), 
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.errors || 'Unknown error' });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default handler;
