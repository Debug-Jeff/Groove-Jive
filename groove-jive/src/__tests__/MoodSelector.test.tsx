import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import MoodSelector from '../components/MoodSelector'

describe('MoodSelector', () => {
  it('renders all mood buttons', () => {
    const { getByText } = render(<MoodSelector onMoodSelect={() => {}} />)
    
    expect(getByText('Happy')).toBeInTheDocument()
    expect(getByText('Sad')).toBeInTheDocument()
    expect(getByText('Energetic')).toBeInTheDocument()
    expect(getByText('Relaxed')).toBeInTheDocument()
    expect(getByText('Focused')).toBeInTheDocument()
    expect(getByText('Romantic')).toBeInTheDocument()
  })

  it('calls onMoodSelect when a mood is clicked', () => {
    const mockOnMoodSelect = jest.fn()
    const { getByText } = render(<MoodSelector onMoodSelect={mockOnMoodSelect} />)
    
    fireEvent.click(getByText('Happy'))
    expect(mockOnMoodSelect).toHaveBeenCalledWith('Happy')
  })
})

