import React from 'react'
import {
  useItems,
  useOptedItem,
  useOptDispatcher,
  useLoadingStatus,
  useOnLoadSuccess,
  useLoadDispatcher,
  useSetDispatcher,
} from '@dckit/store'
import { AppBarHead, PageBarHead } from '@dckit/ui'

type ItemsProps = {
  itemType: string
  optedItemId?: number
}

export function Items(props: ItemsProps) {
  const { itemType, optedItemId } = props

  const items: any[] = useItems(itemType)
  const optedItem = useOptedItem(itemType)
  const loading = useLoadingStatus(itemType)
  const load = useLoadDispatcher(itemType)
  const setItems = useSetDispatcher(itemType)
  const opt = useOptDispatcher(itemType)

  useOnLoadSuccess(itemType, () => opt(optedItemId))

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
