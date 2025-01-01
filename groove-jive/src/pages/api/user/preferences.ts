import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { updateUserPreferences } from '../../../lib/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (req.method === 'POST') {
    const { preferences } = req.body
    const result = await updateUserPreferences(session.user.id, preferences)
    
    if (result.error) {
      return res.status(500).json({ error: result.error })
    }

    return res.status(200).json({ message: 'Preferences updated successfully' })
  }

  res.setHeader('Allow', ['POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}