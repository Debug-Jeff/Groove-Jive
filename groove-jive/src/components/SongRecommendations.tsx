'use client'

import { useState, useEffect } from 'react'
import { Box, Grid, Typography, CircularProgress } from '@mui/material'
import { useSession } from 'next-auth/react'
import SongCard from './SongCard'
import { getRecommendations } from '../lib/spotify'

interface SongRecommendationsProps {
  mood: string
}

export default function SongRecommendations({ mood }: SongRecommendationsProps) {
  const [songs, setSongs] = useState([])
  const [loading, setLoading] = useState(false)
  const { data: session } = useSession()

  useEffect(() => {
    const fetchRecommendations = async () => {
      if (session?.accessToken && mood) {
        setLoading(true)
        try {
          const recommendations = await getRecommendations(session.accessToken, mood)
          setSongs(recommendations)
        } catch (error) {
          console.error('Error fetching recommendations:', error)
        } finally {
          setLoading(false)
        }
      }
    }

    fetchRecommendations()
  }, [mood, session])

  if (loading) {
    return <CircularProgress />
  }

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'text.primary' }}>
        Recommended Songs for {mood || 'Your Mood'}
      </Typography>
      <Grid container spacing={3}>
        {songs.map((song) => (
          <Grid item key={song.id} xs={12} sm={6} md={4}>
            <SongCard song={song} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

