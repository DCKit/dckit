import { composeAction } from '../helpers/actions'
import { TAction, ActionTypes } from '../types'

// acts action creators for items

export function loadItems(itemType: string, options?: any): TAction {
  return composeAction(ActionTypes.loadItems)({ itemType, options })
}

export function addItem(itemType: string, item: any, options?: any): TAction {
  return composeAction(ActionTypes.addItem)({
    itemType,
    options,
    payload: item,
  })
}

export function updateItem(
  itemType: string,
  id: string | number,
  item: any,
  options?: any
): TAction {
  return composeAction(ActionTypes.updateItem)({
    itemType,
    id,
    options,
    payload: item,
  })
}

export function deleteItem(
  itemType: string,
  id: string | number,
  options?: any
): TAction {
  return composeAction(ActionTypes.deleteItem)({ itemType, id, options })
}

export function importItems(itemType: string, options?: any): TAction {
  return composeAction(ActionTypes.importItems)({ itemType, options })
}

export function exportItems(itemType: string, options?: any): TAction {
  return composeAction(ActionTypes.exportItems)({ itemType, options })
}

export function generateItems(itemType: string, options?: any): TAction {
  return composeAction(ActionTypes.generateItems)({ itemType, options })
}

export function submitItems(itemType: string, options?: any): TAction {
  return composeAction(ActionTypes.submitItems)({ itemType, options })
}

export function validateItems(itemType: string, options?: any): TAction {
  return composeAction(ActionTypes.validateItems)({ itemType, options })
}
