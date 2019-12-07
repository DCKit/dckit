import { testLoadFetcher, testAddFetcher, testDeleteFetcher } from './fetchers'

describe('fetchers', () => {
  it('should return undefined if there is no appropriate request', () => {
    expect(testLoadFetcher({})).toBeUndefined()
    expect(testAddFetcher({})).toBeUndefined()
    expect(testDeleteFetcher({})).toBeUndefined()
  })
})
