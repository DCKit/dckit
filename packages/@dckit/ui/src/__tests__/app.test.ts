import { cleanup, render, fireEvent } from '@testing-library/react'
import { app } from './App'

afterEach(cleanup)

describe('test app', () => {
  it('should render', () => {
    const { getByText } = render(app)
    expect(getByText('App')).toBeDefined()

    fireEvent.click(getByText('page1'))
    expect(getByText('Page 1')).toBeDefined()

    fireEvent.click(getByText('tab1'))
    expect(getByText('Tab 1')).toBeDefined()

    fireEvent.click(getByText('subTab1'))
    expect(getByText('Sub Tab 1')).toBeDefined()
  })
})
