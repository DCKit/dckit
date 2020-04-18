import { createSelector } from '@reduxjs/toolkit'
import { getDckState, get3rdParam } from '../helpers/selectors'
import { getIndexedItem } from '../items/selectors'
import { TState } from '../types'

type getFilters = (state: TState, itemType: string) => any[]
type getFilter = (state: TState, itemType: string, field: string) => any
type getFiltersState = (state: TState, itemType: string) => any

const _getFiltersState = getDckState('filters')

export const getFiltersState: getFiltersState = createSelector(
  _getFiltersState,
  filtersState => filtersState
)

export const getFilters: getFilters = createSelector(
  getFiltersState,
  filtersState => filtersState.items
)

export const getFilter: getFilter = createSelector(
  [getFiltersState, get3rdParam],
  getIndexedItem
)
