'use client'

import { useState } from 'react'
import { TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value)
        // TODO: Implement search functionality
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
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            sx={{ my: 2 }}
        />
    )
}

