import { composeAction } from '../helpers/actions'
import { TAction, ActionTypes, PaginationProps } from '../types'

// action creators for itemProps

export function setItemProp(
  itemType: string,
  field: string,
  data: any
): TAction {
  return composeAction(ActionTypes.setItemProp)({
    itemType,
    field,
    payload: data,
  })
}

export function setTotalItems(itemType: string, totalItems: number): TAction {
  return setItemProp(itemType, PaginationProps.totalItems, totalItems)
}

export function setTotalPages(itemType: string, totalPages: number): TAction {
  return setItemProp(itemType, PaginationProps.totalPages, totalPages)
}

export function setCurrentPage(itemType: string, currentPage: number): TAction {
  return setItemProp(itemType, PaginationProps.currentPage, currentPage)
}
export function setPageSize(itemType: string, pageSize: number): TAction {
  return setItemProp(itemType, PaginationProps.pageSize, pageSize)
}
