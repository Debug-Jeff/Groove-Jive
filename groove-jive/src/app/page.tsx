'use client'

import { Box, Typography, Button, Container } from '@mui/material'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()

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
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}
          >
            Mood Melodies
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: 'text.secondary',
              textAlign: 'center',
            }}
          >
            Discover music that matches your mood
          </Typography>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 200 }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={handleGetStarted}
            sx={{
              display: 'block',
              margin: '0 auto',
              borderRadius: '50px',
              padding: '12px 32px',
              fontSize: '1.2rem',
            }}
          >
            Get Started
          </Button>
        </motion.div>
      </Container>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: -1,
        }}
      >
        {[...Array(50)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            sx={{
              position: 'absolute',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              pointerEvents: 'none',
            }}
            animate={{
              x: ['0%', '100%'],
              y: ['0%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
            }}
          />
        ))}
      </Box>
    </Box>
  )
}

