import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import { App } from './App'

describe('app', () => {
  it('should render and be clickable', async () => {
    render(<App />)

    expect(screen.getByText('App')).toBeDefined()

    fireEvent.click(screen.getByText('page1'))
    expect(await screen.getByText('Page 1')).toBeDefined()

    fireEvent.click(screen.getByText('Tab 1'))
    expect(await screen.getByText('Tab 1')).toBeDefined()

    fireEvent.click(screen.getByText('Sub Tab 3'))
    expect(await screen.getByText('Tab 1')).toBeDefined()

    fireEvent.click(screen.getByText('items'))
    expect(await screen.findByText(/opted item/)).toBeDefined()

    fireEvent.click(screen.getByText('load items'))
    expect(await screen.findAllByText(/item3/)).toBeDefined()

    fireEvent.click(screen.getByText('forms'))
    expect(await screen.findByText(/Use defaults/)).toBeDefined()
  })
})
