'use client'

import { useState } from 'react'
import { Box, IconButton, Typography, Slider, Drawer } from '@mui/material'
import { PlayArrow, Pause, SkipPrevious, SkipNext, Repeat, Shuffle, VolumeUp, Lyrics, Info } from '@mui/icons-material'
import { motion } from 'framer-motion'

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(100)
  const [volume, setVolume] = useState(50)
  const [showLyrics, setShowLyrics] = useState(false)
  const [showInfo, setShowInfo] = useState(false)

  const handlePlayPause = () => setIsPlaying(!isPlaying)
  const handleVolumeChange = (event: Event, newValue: number | number[]) => {
    setVolume(newValue as number)
  }
  const handleTimeChange = (event: Event, newValue: number | number[]) => {
    setCurrentTime(newValue as number)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
        p: 2,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '30%', display: 'flex', alignItems: 'center' }}>
        <Typography variant="subtitle1" sx={{ mr: 2 }}>
          Now Playing
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Song Title - Artist
        </Typography>
      </Box>
      <Box sx={{ width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box>
          <IconButton aria-label="shuffle">
            <Shuffle />
          </IconButton>
          <IconButton aria-label="previous song">
            <SkipPrevious />
          </IconButton>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <IconButton aria-label="play/pause" onClick={handlePlayPause}>
              {isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
          </motion.div>
          <IconButton aria-label="next song">
            <SkipNext />
          </IconButton>
          <IconButton aria-label="repeat">
            <Repeat />
          </IconButton>
        </Box>
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            {formatTime(currentTime)}
          </Typography>
          <Slider
            size="small"
            value={currentTime}
            max={duration}
            onChange={handleTimeChange}
            aria-label="time-indicator"
            sx={{ mx: 2 }}
          />
          <Typography variant="body2" color="text.secondary">
            {formatTime(duration)}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: '30%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <IconButton aria-label="lyrics" onClick={() => setShowLyrics(true)}>
          <Lyrics />
        </IconButton>
        <IconButton aria-label="song info" onClick={() => setShowInfo(true)}>
          <Info />
        </IconButton>
        <Box sx={{ width: 100, mr: 1 }}>
          <Slider
            aria-label="Volume"
            value={volume}
            onChange={handleVolumeChange}
          />
        </Box>
        <VolumeUp />
      </Box>
      <Drawer
        anchor="right"
        open={showLyrics}
        onClose={() => setShowLyrics(false)}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <Typography variant="h6">Lyrics</Typography>
          {/* Add lyrics content here */}
        </Box>
      </Drawer>
      <Drawer
        anchor="right"
        open={showInfo}
        onClose={() => setShowInfo(false)}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <Typography variant="h6">Song Info</Typography>
          {/* Add song info content here */}
        </Box>
      </Drawer>
    </Box>
  )
}

