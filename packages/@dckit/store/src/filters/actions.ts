import { composeAction } from '../helpers/actions'
import { IAction, ActionTypes } from '../types'

// action creators for filters

export function setFilters(itemType: string, filters: any[]): IAction {
  return composeAction(ActionTypes.setFilters)({
    itemType,
    payload: filters,
  })
}

export function setFilter(
  itemType: string,
  field: string,
  filter: any
): IAction {
  return composeAction(ActionTypes.setFilter)({
    itemType,
    field,
    payload: filter,
  })
}

export function removeFilter(itemType: string, field: string): IAction {
  return composeAction(ActionTypes.removeFilter)({
    itemType,
    field,
  })
}
