// pages/api/proxy-smash-graphql.ts

import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Send the request to smash.gg's GraphQL API
    const response = await fetch('https://api.smash.gg/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_START_GG_API_KEY}`, // Add your API key here
      },
      body: JSON.stringify(req.body), // Forward the request body (GraphQL query)
    });

    // Parse the response from the API
    const data = await response.json();

    // Check if the request was successful
    if (!response.ok) {
      return res.status(response.status).json({ error: data.errors || 'Unknown error' });
    }

    // Forward the response from the API to the frontend
    res.status(200).json(data);
  } catch (error) {
    // Handle any errors that occur during the fetch
    console.error('Error proxying the GraphQL request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default handler;
