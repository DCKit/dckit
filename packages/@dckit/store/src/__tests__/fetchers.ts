import { Acts } from '../types'
import { TestItem, testItems } from './testData'

export function testLoadFetcher(request: any) {
  if (request.itemType === TestItem && request.act === Acts.Load) {
    return testFetch({
      data: testItems,
      totalItems: 5,
      totalPages: 1,
    })
  }
}

export function testAddFetcher(request: any) {
  if (request.itemType === TestItem && request.act === Acts.Add) {
    return testFetch({ id: 3, data: request.params })
  }
}

export function testDeleteFetcher(request: any) {
  if (request.itemType === TestItem && request.act === Acts.Delete) {
    return testFetch()
  }
}

export function failFetcher(request: any) {
  // simulate failed fetch
  throw new TypeError(`wrong item id: ${request.params.id}`)
}

async function testFetch(mockData?: any) {
  // simulate async fetch
  await new Promise(resolve => setTimeout(resolve, 10))
  return mockData
}
