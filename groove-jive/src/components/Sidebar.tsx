'use client'

import { Box, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material'
import { Home, Search, LibraryMusic, AddBox, Favorite } from '@mui/icons-material'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <Box sx={{ width: 240, flexShrink: 0, bgcolor: 'background.paper' }}>
      <List>
        <ListItem button component={Link} href="/home">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component="a">
          <ListItemIcon>
            <Search />
          </ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>
        <ListItem button component="a">
          <ListItemIcon>
            <LibraryMusic />
          </ListItemIcon>
          <ListItemText primary="Your Library" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <AddBox />
          </ListItemIcon>
          <ListItemText primary="Create Playlist" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Favorite />
          </ListItemIcon>
          <ListItemText primary="Liked Songs" />
        </ListItem>
      </List>
    </Box>
  )
}

