import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { mood } = req.query

  try {
    // TODO: Replace with actual API call to a music service
    const response = await axios.get(`https://api.example.com/recommendations?mood=${mood}`)
    res.status(200).json(response.data)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching song recommendations' })
  }
}

