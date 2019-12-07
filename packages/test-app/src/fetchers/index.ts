import { Acts } from '@dckit/store'
import { TestItem } from '../items'

const testItems = [
  { id: 1, field: 'item1' },
  { id: 2, field: 'item2' },
  { id: 3, field: 'item3' },
  { id: 4, field: 'item4' },
  { id: 5, field: 'item5' },
]

export function testLoadFetcher(request: any) {
  if (request.itemType === TestItem && request.act === Acts.Load) {
    return testFetch({
      data: testItems,
    })
  }
}

async function testFetch(mockData?: any) {
  // simulate async fetch
  await new Promise(resolve => setTimeout(resolve, 1000))
  return mockData
}
