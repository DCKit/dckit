import { screen, render } from '@testing-library/react'
import { app } from './App'

describe('routes', () => {
  it('should render', async () => {
    render(app)
    expect(screen.getByText('routes')).toBeDefined()
  })
})
