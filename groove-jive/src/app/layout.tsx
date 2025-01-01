'use client'

import { useEffect } from 'react'
import { Providers } from './providers'
import { AppProvider } from '../contexts/AppContext'
import ErrorBoundary from '../components/ErrorBoundary'
import { Box } from '@mui/material'
import { initGA, logPageView } from '../lib/analytics'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    initGA()
    logPageView()
  }, [])

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Circular+Std:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7B68EE" />
      </head>
      <body>
        <Providers>
          <AppProvider>
            <ErrorBoundary>
              <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
                {children}
              </Box>
            </ErrorBoundary>
          </AppProvider>
        </Providers>
      </body>
    </html>
  )
}

