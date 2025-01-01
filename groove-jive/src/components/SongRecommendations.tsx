'use client'

import { useState } from 'react'
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'

// TODO: Replace with actual API call
const mockSongs = [
    { id: 1, title: 'Happy Song', artist: 'Happy Artist' },
    { id: 2, title: 'Sad Song', artist: 'Sad Artist' },
    { id: 3, title: 'Energetic Song', artist: 'Energetic Artist' },
    { id: 4, title: 'Relaxing Song', artist: 'Relaxing Artist' },
]

export default function SongRecommendations() {
    const [songs] = useState(mockSongs)

    // TODO: Implement useEffect to fetch songs based on selected mood

    return (
        <Box sx={{ my: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>
                Recommended Songs:
            </Typography>
            <List>
                {songs.map((song) => (
                    <ListItem key={song.id}>
                        <ListItemText primary={song.title} secondary={song.artist} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

