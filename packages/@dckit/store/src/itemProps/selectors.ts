import { createSelector } from '@reduxjs/toolkit'
import { getDckState, get3rdParam } from '../helpers/selectors'
import { TState, PaginationProps } from '../types'

type getItemPropsState = (state: TState, itemType: string) => any
type getItemProp = (state: TState, itemType: string, field: string) => any
type getTotalItems = (state: TState, itemType: string) => any
type getTotalPages = (state: TState, itemType: string) => any
type getCurrentPage = (state: TState, itemType: string) => any
type getPageSize = (state: TState, itemType: string) => any

const _getItemPropsState = getDckState('itemProps')

export const getItemPropsState: getItemPropsState = createSelector(
  _getItemPropsState,
  itemPropsState => itemPropsState
)

export const getItemProp: getItemProp = createSelector(
  [getItemPropsState, get3rdParam],
  (itemPropsState, prop) => itemPropsState[prop]
)

export const getTotalItems: getTotalItems = createSelector(
  getItemPropsState,
  itemPropsState => itemPropsState[PaginationProps.totalItems]
)

export const getTotalPages: getTotalPages = createSelector(
  getItemPropsState,
  itemPropsState => itemPropsState[PaginationProps.totalPages]
)

export const getCurrentPage: getCurrentPage = createSelector(
  getItemPropsState,
  itemPropsState => itemPropsState[PaginationProps.currentPage]
)

export const getPageSize: getPageSize = createSelector(
  getItemPropsState,
  itemPropsState => itemPropsState[PaginationProps.pageSize]
)
