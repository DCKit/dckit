import React from 'react'
import {
  useItems,
  useOptedItem,
  useOptItem,
  useLoading,
  useOnLoadSuccess,
  useLoadItems,
  useSetItems,
} from '@dckit/store'
import { AppBarHead, PageBarHead } from '@dckit/ui'

type ItemsProps = {
  itemType: string
  optedItemId?: number
}

export function Items(props: ItemsProps) {
  const { itemType, optedItemId } = props

  const items: any[] = useItems(itemType)
  const loading = useLoading(itemType)
  const load = useLoadItems(itemType)
  const setItems = useSetItems(itemType)
  const optItem = useOptItem(itemType)
  const optedItem = useOptedItem(itemType)

  useOnLoadSuccess(itemType, () => optItem(optedItemId))

  return (
    <>
      {optedItem && (
        <AppBarHead.Provider>Opted item: {optedItem.field}</AppBarHead.Provider>
      )}
      <PageBarHead.Provider>
        {items ? items.length : 0} items
      </PageBarHead.Provider>
      <button onClick={() => load()} disabled={loading}>
        {loading ? 'loading...' : 'load items'}
      </button>{' '}
      <button onClick={() => setItems([])}>clear items</button>
      <div />
      <pre>items: {JSON.stringify(items, null, 2)}</pre>
      <pre>opted item: {JSON.stringify(optedItem, null, 2)}</pre>
    </>
  )
}
