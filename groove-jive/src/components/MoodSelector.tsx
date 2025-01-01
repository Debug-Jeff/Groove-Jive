'use client'

import { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'

const moods = ['Happy', 'Sad', 'Energetic', 'Relaxed']

export default function MoodSelector() {
    const [selectedMood, setSelectedMood] = useState('')

    const handleMoodSelect = (mood: string) => {
        setSelectedMood(mood)
        // TODO: Implement API call to get song recommendations based on mood
    }

    return (
        <Box sx={{ my: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>
                Select your mood:
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
                {moods.map((mood) => (
                    <Button
                        key={mood}
                        variant={selectedMood === mood ? 'contained' : 'outlined'}
                        onClick={() => handleMoodSelect(mood)}
                    >
                        {mood}
                    </Button>
                ))}
            </Box>
        </Box>
    )
}

