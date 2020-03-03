import { cleanup, render, fireEvent } from '@testing-library/react'
import { app } from './App'

afterEach(cleanup)

describe('test app', () => {
  it('should render form', async () => {
    const { getByText, getByLabelText, findAllByDisplayValue } = render(app)
    expect(getByText('submit')).toBeDefined()
    fireEvent.click(getByLabelText('Use defaults'))
    const fields = await findAllByDisplayValue(/default\s\S+/)
    expect(fields).toHaveLength(3)
  })
})
