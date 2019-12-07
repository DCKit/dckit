import { composeAction } from '../helpers/actions'
import { IAction, ActionTypes, ItemProps } from '../types'

// action creators for itemProps

export function setItemProp(
  itemType: string,
  field: string,
  data: any
): IAction {
  return composeAction(ActionTypes.setItemProp)({
    itemType,
    field,
    payload: data,
  })
}

export function setTotalItems(itemType: string, totalItems: number): IAction {
  return setItemProp(itemType, ItemProps.totalItems, totalItems)
}

export function setTotalPages(itemType: string, totalPages: number): IAction {
  return setItemProp(itemType, ItemProps.totalPages, totalPages)
}

export function setCurrentPage(itemType: string, currentPage: number): IAction {
  return setItemProp(itemType, ItemProps.currentPage, currentPage)
}
export function setPageSize(itemType: string, pageSize: number): IAction {
  return setItemProp(itemType, ItemProps.pageSize, pageSize)
}
