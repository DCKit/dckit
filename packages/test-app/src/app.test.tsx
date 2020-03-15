import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import { App } from './App'

const { getByText, findByText, findAllByText } = screen

describe('app', () => {
  it('should render and be clickable', async () => {
    render(<App />)

    expect(getByText('App')).toBeDefined()

    fireEvent.click(getByText('page1'))
    expect(getByText('Page 1')).toBeDefined()
    expect(await findAllByText(/Comp/)).toHaveLength(2)

    fireEvent.click(getByText('Tab 1'))
    expect(getByText('Tab 1')).toBeDefined()

    fireEvent.click(getByText('Sub Tab 3'))
    expect(getByText('Tab 1')).toBeDefined()

    fireEvent.click(getByText('items'))
    expect(await findByText(/opted item/)).toBeDefined()

    fireEvent.click(getByText('load items'))
    expect(await findAllByText(/item3/)).toBeDefined()

    fireEvent.click(getByText('forms'))
    expect(await findByText(/Use defaults/)).toBeDefined()
  })
})
