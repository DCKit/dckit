import { createSelector } from '@reduxjs/toolkit'
import { getDckState, get3rdParam } from '../helpers/selectors'
import { getIndexedItem } from '../items/selectors'
import { TState } from '../types'

type getSortFields = (state: TState, itemType: string) => any[]
type getSortField = (state: TState, itemType: string, field: string) => any
type getSortingState = (state: TState, itemType: string) => any

const _getSortingState = getDckState('sorting')

export const getSortingState: getSortingState = createSelector(
  _getSortingState,
  sortingState => sortingState
)

export const getSortFields: getSortFields = createSelector(
  getSortingState,
  sortingState => sortingState.items
)

export const getSortField: getSortField = createSelector(
  [getSortingState, get3rdParam],
  getIndexedItem
)
