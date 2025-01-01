'use client'

import { useState, useEffect } from 'react'
import { Box, Typography, Button, Container } from '@mui/material'
import { keyframes } from '@emotion/react'
import { useRouter } from 'next/navigation'

// Define animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const slideUp = keyframes`
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`

export default function LandingPage() {
  const [animationStarted, setAnimationStarted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Start animation after component mount
    setAnimationStarted(true)
  }, [])

  const handleGetStarted = () => {
    router.push('/login')
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
      <Container maxWidth="sm">
        <Box
          sx={{
            textAlign: 'center',
            animation: animationStarted ? `${fadeIn} 1.5s ease-out` : 'none',
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 'bold', color: 'white' }}
          >
            Groove N'Jive
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: 'text.secondary',
              animation: animationStarted ? `${slideUp} 1s ease-out 0.5s both` : 'none',
            }}
          >
            Discover music that matches your mood
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleGetStarted}
            sx={{
              animation: animationStarted ? `${slideUp} 1s ease-out 1s both` : 'none',
            }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

