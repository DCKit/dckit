import { getParams, getItemIndex } from '../helpers/reducers'
import { TState, TAction } from '../types'

// case reducers are implicitly wrapped with immer
// so we have "mutative" immutable update logic

export const reducers = {
  setItems(state: TState, action: TAction) {
    state = setItemsWithIndex(state, action)
  },
  setItem(state: TState, action: TAction) {
    state = updateOrAppendItemByKey(state, action)
  },
  removeItem(state: TState, action: TAction) {
    state = removeItemByKey(state, action)
  },
  setItemProp(state: TState, action: TAction) {
    state = updateItemByField(state, action, action.meta.field)
  },
  optItem(state: TState, action: TAction) {
    state = updateItemByField(state, action, 'optedItemId')
  },
  selectItem(state: TState, action: TAction) {
    state = selectOrUnselectItemByKey(state, action)
  },
}

function setItemsWithIndex(state: TState, action: TAction): TState {
  const { itemType, data, itemState } = getParams(state, action)
  itemState.items = data
  itemState.itemIndex = getItemIndex(data)
  itemState.selectedItems = {}
  state[itemType] = itemState
  return state
}

function updateItemByField(
  state: TState,
  action: TAction,
  field: string
): TState {
  const { itemType, data, itemState } = getParams(state, action)
  itemState[field] = data
  state[itemType] = itemState
  return state
}

function updateOrAppendItemByKey(state: TState, action: TAction): TState {
  const { itemType, data, id, field, itemState } = getParams(state, action)
  if (!id && !field) return state

  const key: string = String(id || field)
  let { items, itemIndex } = itemState
  const index = itemIndex ? itemIndex[key] : void 0

  if (index !== void 0 && Array.isArray(items)) {
    // update existing item
    items[index] = data
  } else {
    // append new item
    if (!Array.isArray(items)) items = []
    if (!itemIndex) itemIndex = {}
    itemIndex[key] = items.length
    items.push(data)
  }

  itemState.items = items
  itemState.itemIndex = itemIndex
  state[itemType] = itemState
  return state
}

function removeItemByKey(state: TState, action: TAction): TState {
  const { itemType, id, field, itemState } = getParams(state, action)
  if (!id && !field) return state

  const key: string = String(id || field)
  let { items, itemIndex, selectedItems } = itemState
  const index = itemIndex ? itemIndex[key] : void 0
  if (index === void 0 || !Array.isArray(items)) return state

  items.splice(index, 1)
  delete itemIndex[key]
  if (selectedItems) delete selectedItems[key]

  itemState.items = items
  itemState.itemIndex = itemIndex
  itemState.selectedItems = selectedItems
  state[itemType] = itemState
  return state
}

function selectOrUnselectItemByKey(state: TState, action: TAction): TState {
  const { itemType, id, field, data: select, itemState } = getParams(
    state,
    action
  )
  if (!id && !field) return state

  const key: string = String(id || field)
  let { selectedItems, itemIndex } = itemState
  if (!selectedItems) selectedItems = {}

  if (select) {
    if (itemIndex?.[key]) selectedItems[key] = itemIndex[key]
  } else {
    delete selectedItems[key]
  }

  itemState.selectedItems = selectedItems
  state[itemType] = itemState
  return state
}
