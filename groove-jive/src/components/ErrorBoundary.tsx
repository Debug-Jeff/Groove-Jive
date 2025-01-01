'use client'

import React, { ErrorInfo, ReactNode } from 'react'
import { Box, Typography, Button } from '@mui/material'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <Typography variant="h4" gutterBottom>
            Oops! Something went wrong.
          </Typography>
          <Button variant="contained" onClick={() => this.setState({ hasError: false })}>
            Try again
          </Button>
        </Box>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

