'use client'

import { useState, useEffect } from 'react'
import { Box, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material'
import { useSession } from 'next-auth/react'

export default function RecentlyPlayed() {
  const [recentTracks, setRecentTracks] = useState([])
  const { data: session } = useSession()

  useEffect(() => {
    // Fetch recently played tracks from Spotify API
    const fetchRecentTracks = async () => {
      // Implementation here
    }

    if (session) {
      fetchRecentTracks()
    }
  }, [session])

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Recently Played
      </Typography>
      <List>
        {recentTracks.map((track: any) => (
          <ListItem key={track.id}>
            <ListItemAvatar>
              <Avatar src={track.album.images[0].url} alt={track.name} />
            </ListItemAvatar>
            <ListItemText primary={track.name} secondary={track.artists[0].name} />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

