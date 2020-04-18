import { composeAction } from '../helpers/actions'
import { TAction, ActionTypes } from '../types'

// action creators for filters

export function setFilters(itemType: string, filters: any[]): TAction {
  return composeAction(ActionTypes.setFilters)({
    itemType,
    payload: filters,
  })
}

export function setFilter(
  itemType: string,
  field: string,
  filter: any
): TAction {
  return composeAction(ActionTypes.setFilter)({
    itemType,
    field,
    payload: filter,
  })
}

export function removeFilter(itemType: string, field: string): TAction {
  return composeAction(ActionTypes.removeFilter)({
    itemType,
    field,
  })
}
