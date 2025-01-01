'use client'

import { useState } from 'react'
import { TextField, InputAdornment } from '@mui/material'
import { Search } from '@mui/icons-material'

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
    // TODO: Implement search functionality
    console.log('Searching for:', event.target.value)
  }

  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search for songs, artists, or albums"
      value={searchQuery}
      onChange={handleSearch}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
      sx={{ my: 2, bgcolor: 'background.paper' }}
    />
  )
}

