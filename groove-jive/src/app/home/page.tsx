'use client'

import { useState, useEffect } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useSession } from 'next-auth/react'
import MoodSelector from '../../components/MoodSelector'
import SongRecommendations from '../../components/SongRecommendations'
import SearchBar from '../../components/SearchBar'
import Sidebar from '../../components/Sidebar'
import Player from '../../components/Player'
import RecentlyPlayed from '../../components/RecentlyPlayed'
import Library from '../../components/Library'

export default function HomePage() {
  const [selectedMood, setSelectedMood] = useState('')
  const { data: session } = useSession()

  useEffect(() => {
    // Fetch user data or perform any necessary initialization
  }, [session])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, overflow: 'auto' }}>
          <Container maxWidth="lg">
            <SearchBar />
            <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'text.primary', mt: 2 }}>
              Welcome, {session?.user?.name}!
            </Typography>
            <MoodSelector onMoodSelect={setSelectedMood} />
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <SongRecommendations mood={selectedMood} />
              </Grid>
              <Grid item xs={12} md={4}>
                <RecentlyPlayed />
                <Library />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Player />
    </Box>
  )
}

