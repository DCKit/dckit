import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react'
import { App } from './App'

afterEach(cleanup)

describe('app', () => {
  it('should render and be clickable', async () => {
    const { getByText, findByText, findAllByText } = render(<App />)

    expect(getByText('App')).toBeDefined()

    fireEvent.click(getByText('page1'))
    expect(await getByText('Page 1')).toBeDefined()

    fireEvent.click(getByText('Tab 1'))
    expect(await getByText('Tab 1')).toBeDefined()

    fireEvent.click(getByText('Sub Tab 3'))
    expect(await getByText('Tab 1')).toBeDefined()

    fireEvent.click(getByText('items'))
    expect(await findByText(/opted item/)).toBeDefined()

    fireEvent.click(getByText('load items'))
    expect(await findAllByText(/item3/)).toBeDefined()

    fireEvent.click(getByText('forms'))
    expect(await findByText(/Use defaults/)).toBeDefined()
  })
})
