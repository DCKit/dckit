import { cleanup, render } from '@testing-library/react'
import { app } from './App'

afterEach(cleanup)

describe('tables', () => {
  it('should render', async () => {
    const { getByText } = render(app)
    expect(getByText('table')).toBeDefined()
  })
})
