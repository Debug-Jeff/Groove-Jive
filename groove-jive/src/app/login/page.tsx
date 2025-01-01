'use client'

import { signIn } from 'next-auth/react'
import { Box, Button, Container, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { FaSpotify, FaGoogle } from 'react-icons/fa'

export default function LoginPage() {
  const handleSignIn = (provider: string) => {
    signIn(provider, { callbackUrl: '/home' })
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #7B68EE 30%, #121212 90%)',
      }}
    >
      <Container maxWidth="xs">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'background.paper',
              padding: 4,
              borderRadius: 2,
            }}
          >
            <Typography component="h1" variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
              Welcome to Mood Melodies
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                fullWidth
                variant="contained"
                onClick={() => handleSignIn('spotify')}
                startIcon={<FaSpotify />}
                sx={{ mt: 3, mb: 2, bgcolor: '#1DB954', '&:hover': { bgcolor: '#1ED760' } }}
              >
                Sign In with Spotify
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                fullWidth
                variant="contained"
                onClick={() => handleSignIn('google')}
                startIcon={<FaGoogle />}
                sx={{ mt: 2, mb: 2, bgcolor: '#4285F4', '&:hover': { bgcolor: '#357AE8' } }}
              >
                Sign In with Google
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

