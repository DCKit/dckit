import { cleanup, render, fireEvent } from '@testing-library/react'
import { app } from './App'

afterEach(cleanup)

describe('test app', () => {
  it('should render', () => {
    const { getByText } = render(app)
    expect(getByText('App')).toBeDefined()

    fireEvent.click(getByText('page1'))
    expect(getByText('Page 1')).toBeDefined()

    fireEvent.click(getByText('Tab 1'))
    expect(getByText('Tab 1')).toBeDefined()
  })
})
