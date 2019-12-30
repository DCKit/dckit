import { cleanup, render } from '@testing-library/react'
import { app } from './App'

afterEach(cleanup)

describe('test app', () => {
  it('should render', () => {
    render(app)
  })
})
