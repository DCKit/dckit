import { composeAction } from '../helpers/actions'
import { TAction, ActionTypes } from '../types'

// action creators for sorting

export function setSortFields(itemType: string, sortFields: any[]): TAction {
  return composeAction(ActionTypes.setSortFields)({
    itemType,
    payload: sortFields,
  })
}

export function setSortField(
  itemType: string,
  field: string,
  sortField: any
): TAction {
  return composeAction(ActionTypes.setSortField)({
    itemType,
    field,
    payload: sortField,
  })
}

export function removeSortField(itemType: string, field: string): TAction {
  return composeAction(ActionTypes.removeSortField)({
    itemType,
    field,
  })
}
