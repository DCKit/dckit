import { getParams, getItemIndex } from '../helpers/reducers'
import { IState, IAction } from '../types'

// case reducers are implicitly wrapped with immer
// so we have "mutative" immutable update logic

class MutativeReducers {
  setItems(state: IState, action: IAction) {
    state = setItemsWithIndex(state, action)
  }
  setItem(state: IState, action: IAction) {
    state = updateOrAppendItemByKey(state, action)
  }
  removeItem(state: IState, action: IAction) {
    state = removeItemByKey(state, action)
  }
  setItemProp(state: IState, action: IAction) {
    state = updateItemByField(state, action, action.meta.field)
  }
  optItem(state: IState, action: IAction) {
    state = updateItemByField(state, action, 'optedItemId')
  }
  selectItem(state: IState, action: IAction) {
    state = selectOrUnselectItemByKey(state, action)
  }
}

export const reducers = new MutativeReducers()

function setItemsWithIndex(state: IState, action: IAction): IState {
  const { itemType, data, itemState } = getParams(state, action)
  itemState.items = data
  itemState.itemIndex = getItemIndex(data)
  itemState.selectedItems = {}
  state[itemType] = itemState
  return state
}

function updateItemByField(
  state: IState,
  action: IAction,
  field: string
): IState {
  const { itemType, data, itemState } = getParams(state, action)
  itemState[field] = data
  state[itemType] = itemState
  return state
}

function updateOrAppendItemByKey(state: IState, action: IAction): IState {
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

function removeItemByKey(state: IState, action: IAction): IState {
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

function selectOrUnselectItemByKey(state: IState, action: IAction): IState {
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
