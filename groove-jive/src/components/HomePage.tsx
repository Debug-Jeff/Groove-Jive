'use client'

import { useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import MoodSelector from './MoodSelector'
import SongRecommendations from './SongRecommendations'
import SearchBar from './SearchBar'
import Sidebar from './Sidebar'
import Player from './Player'

export default function HomePage() {
  const [selectedMood, setSelectedMood] = useState('')

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Container maxWidth="lg">
            <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'text.primary' }}>
              Discover Your Mood Melodies
            </Typography>
            <SearchBar />
            <MoodSelector onMoodSelect={setSelectedMood} />
            <SongRecommendations mood={selectedMood} />
          </Container>
        </Box>
      </Box>
      <Player />
    </Box>
  )
}

