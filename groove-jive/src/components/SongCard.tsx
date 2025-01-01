'use client'

import Image from 'next/image'
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material'
import { PlayArrow, Favorite } from '@mui/icons-material'

interface Song {
  id: number
  name: string
  artists: { name: string }[]
  album: { images: { url: string }[] }
}

interface SongCardProps {
  song: Song
}

export default function SongCard({ song }: SongCardProps) {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ position: 'relative', width: '100%', paddingTop: '100%' }}>
        <Image
          src={song.album.images[0].url}
          alt={`${song.name} cover`}
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div" noWrap>
          {song.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" noWrap>
          {song.artists[0].name}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <IconButton aria-label="play/pause">
          <PlayArrow sx={{ height: 38, width: 38 }} />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
      </Box>
    </Card>
  )
}

