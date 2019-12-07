import { composeAction } from '../helpers/actions'
import { IAction, ActionTypes } from '../types'

// crud action creators for items

export function loadItems(itemType: string, options?: any): IAction {
  return composeAction(ActionTypes.loadItems)({ itemType, options })
}
export function addItem(itemType: string, item: any, options?: any): IAction {
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
): IAction {
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
): IAction {
  return composeAction(ActionTypes.deleteItem)({ itemType, id, options })
}
export function importItems(itemType: string, options?: any): IAction {
  return composeAction(ActionTypes.importItems)({ itemType, options })
}
export function exportItems(itemType: string, options?: any): IAction {
  return composeAction(ActionTypes.exportItems)({ itemType, options })
}
