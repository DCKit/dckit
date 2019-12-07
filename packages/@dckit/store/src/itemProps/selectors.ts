import { createSelector } from '@reduxjs/toolkit'
import { getDckState, get3rdParam } from '../helpers/selectors'
import { IState, ItemProps } from '../types'

type getItemPropsState = (state: IState, itemType: string) => any
type getItemProp = (state: IState, itemType: string, field: string) => any
type getTotalItems = (state: IState, itemType: string) => any
type getTotalPages = (state: IState, itemType: string) => any
type getCurrentPage = (state: IState, itemType: string) => any
type getPageSize = (state: IState, itemType: string) => any

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
  itemPropsState => itemPropsState[ItemProps.totalItems]
)

export const getTotalPages: getTotalPages = createSelector(
  getItemPropsState,
  itemPropsState => itemPropsState[ItemProps.totalPages]
)

export const getCurrentPage: getCurrentPage = createSelector(
  getItemPropsState,
  itemPropsState => itemPropsState[ItemProps.currentPage]
)

export const getPageSize: getPageSize = createSelector(
  getItemPropsState,
  itemPropsState => itemPropsState[ItemProps.pageSize]
)
