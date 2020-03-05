import { cleanup, render, fireEvent } from '@testing-library/react'
import { app } from './App'

afterEach(cleanup)

describe('form with defaults', () => {
  it('should render and use defaults', async () => {
    const { getByText, getByLabelText, findAllByDisplayValue } = render(app)

    expect(getByText('submit')).toBeDefined()
    const initial = await findAllByDisplayValue(/initial\s\S+/)
    expect(initial).toHaveLength(2)

    fireEvent.click(getByLabelText('Use defaults'))
    const defaults = await findAllByDisplayValue(/default\s\S+/)
    expect(defaults).toHaveLength(3)
  })
})
