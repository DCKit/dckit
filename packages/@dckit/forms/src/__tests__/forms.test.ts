import { cleanup, screen, render, fireEvent } from '@testing-library/react'
import { app } from './App'

afterEach(cleanup)

describe('form with defaults', () => {
  it('should render and use defaults', async () => {
    render(app)

    expect(screen.getByText('submit')).toBeDefined()
    const initial = await screen.findAllByDisplayValue(/initial\s\S+/)
    expect(initial).toHaveLength(2)

    fireEvent.click(screen.getByLabelText('Use defaults'))
    const defaults = await screen.findAllByDisplayValue(/default\s\S+/)
    expect(defaults).toHaveLength(3)
  })
})
