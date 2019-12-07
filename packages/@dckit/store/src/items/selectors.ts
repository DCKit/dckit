import { createSelector } from '@reduxjs/toolkit'
import { getDckState, get3rdParam } from '../helpers/selectors'
import { IState } from '../types'

type getItems = (state: IState, itemType: string) => any[]
type getItem = (state: IState, itemType: string, id: string) => any
type getOptedItemId = (state: IState, itemType: string) => any
type getOptedItem = (state: IState, itemType: string) => any

type getItemState = (state: IState, itemType: string) => any
type getIndexedItem = (itemState: IState, id: string) => any

const _getItemState = getDckState('items')

export const getItemState: getItemState = createSelector(
  _getItemState,
  itemState => itemState
)

export function _getIndexedItem(itemState: IState, id: string): any {
  const { items, itemIndex } = itemState
  if (!Array.isArray(items) || !itemIndex) return void 0
  const index = itemIndex[String(id)]
  return index === void 0 ? void 0 : items[index]
}

export const getIndexedItem: getIndexedItem = createSelector(
  _getIndexedItem,
  item => item
)

export const getItems: getItems = createSelector(
  getItemState,
  itemState => itemState.items
)

export const getItem: getItem = createSelector(
  [getItemState, get3rdParam],
  getIndexedItem
)

export const getOptedItemId: getOptedItemId = createSelector(
  getItemState,
  itemState => itemState.optedItemId
)

export const getOptedItem: getOptedItem = createSelector(
  getItemState,
  itemState => getIndexedItem(itemState, itemState.optedItemId)
)

export function isItemSelected(
  state: IState,
  itemType: string,
  id: string
): boolean {
  const { selectedItems } = getItemState(state, itemType)
  if (!selectedItems) return false
  return String(id) in selectedItems
}

export function getSelectedItemIds(state: IState, itemType: string): any[] {
  const { selectedItems } = getItemState(state, itemType)
  if (!selectedItems) return []
  return Object.keys(selectedItems)
}

export function getSelectedItems(state: IState, itemType: string): any[] {
  const { selectedItems, items } = getItemState(state, itemType)
  if (!selectedItems) return []
  const selectedIds = getSelectedItemIds(state, itemType)
  return selectedIds.map((id: string) => items[selectedItems[id]])
}
