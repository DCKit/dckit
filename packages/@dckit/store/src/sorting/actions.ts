import { composeAction } from '../helpers/actions'
import { IAction, ActionTypes } from '../types'

// action creators for sorting

export function setSortFields(itemType: string, sortFields: any[]): IAction {
  return composeAction(ActionTypes.setSortFields)({
    itemType,
    payload: sortFields,
  })
}

export function setSortField(
  itemType: string,
  field: string,
  sortField: any
): IAction {
  return composeAction(ActionTypes.setSortField)({
    itemType,
    field,
    payload: sortField,
  })
}

export function removeSortField(itemType: string, field: string): IAction {
  return composeAction(ActionTypes.removeSortField)({
    itemType,
    field,
  })
}
