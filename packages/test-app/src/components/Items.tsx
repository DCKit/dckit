import React from 'react'
import {
  useItems,
  useOptedItem,
  useLoading,
  useLoadItems,
  useSetItems,
} from '@dckit/store'
import { PageTitleProvider, PageBarProvider } from '@dckit/ui'

export const Items: React.FC<{ itemType: string; optedItemId?: number }> = ({
  itemType,
  optedItemId,
}) => {
  const items: any[] = useItems(itemType)
  const loading = useLoading(itemType)
  const load = useLoadItems(itemType)
  const setItems = useSetItems(itemType)
  const optedItem = useOptedItem(itemType)

  return (
    <>
      {optedItem && (
        <PageTitleProvider>Opted item: {optedItem.field}</PageTitleProvider>
      )}
      <PageBarProvider>{items ? items.length : 0} items</PageBarProvider>
      <button onClick={() => load({ optedItemId })} disabled={loading}>
        {loading ? 'loading...' : 'load items'}
      </button>{' '}
      <button onClick={() => setItems([])}>clear items</button>
      <div />
      <pre>items: {JSON.stringify(items, null, 2)}</pre>
      <pre>opted item: {JSON.stringify(optedItem, null, 2)}</pre>
    </>
  )
}
