import { Box, Container, Typography } from '@mui/material'
import MoodSelector from '../components/MoodSelector'
import SongRecommendations from '../components/SongRecommendations'
import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Mood-Based Song Recommendations
        </Typography>
        <SearchBar />
        <MoodSelector />
        <SongRecommendations />
      </Box>
    </Container>
  )
}

