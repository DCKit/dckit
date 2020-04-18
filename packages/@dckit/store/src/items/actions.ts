import { composeAction } from '../helpers/actions'
import { TAction, ActionTypes } from '../types'

// core action creators for items

export function setItems(itemType: string, items?: any[]): TAction {
  return composeAction(ActionTypes.setItems)({ itemType, payload: items })
}

export function setItem(
  itemType: string,
  id: string | number,
  item: any
): TAction {
  return composeAction(ActionTypes.setItem)({ itemType, id, payload: item })
}

export function removeItem(itemType: string, id: string | number): TAction {
  return composeAction(ActionTypes.removeItem)({ itemType, id })
}

export function optItem(
  itemType: string,
  id: string | number | undefined
): TAction {
  return composeAction(ActionTypes.optItem)({
    itemType,
    payload: id,
  })
}

export function selectItem(
  itemType: string,
  id: string | number,
  select: boolean
): TAction {
  return composeAction(ActionTypes.selectItem)({
    itemType,
    id,
    payload: select,
  })
}
