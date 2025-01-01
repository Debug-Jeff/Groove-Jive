'use client'

import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'

const moods = [
  { name: 'Happy', color: '#FFD700' },
  { name: 'Sad', color: '#4682B4' },
  { name: 'Energetic', color: '#FF4500' },
  { name: 'Relaxed', color: '#98FB98' },
  { name: 'Focused', color: '#9370DB' },
  { name: 'Romantic', color: '#FF69B4' },
]

interface MoodSelectorProps {
  onMoodSelect: (mood: string) => void
}

export default function MoodSelector({ onMoodSelect }: MoodSelectorProps) {
  const [selectedMood, setSelectedMood] = useState('')

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood)
    onMoodSelect(mood)
  }

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'text.primary' }}>
        How are you feeling today?
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
        {moods.map((mood) => (
          <motion.div
            key={mood.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              style={{
                backgroundColor: mood.color,
                border: 'none',
                borderRadius: '50%',
                width: '80px',
                height: '80px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              }}
              animate={{
                scale: selectedMood === mood.name ? 1.1 : 1,
                boxShadow: selectedMood === mood.name
                  ? '0px 0px 15px rgba(255, 255, 255, 0.5)'
                  : '0px 4px 10px rgba(0, 0, 0, 0.1)',
              }}
              onClick={() => handleMoodSelect(mood.name)}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                }}
              >
                {mood.name}
              </Typography>
            </motion.button>
          </motion.div>
        ))}
      </Box>
    </Box>
  )
}

