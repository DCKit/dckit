import { createSelector } from '@reduxjs/toolkit'
import { TState } from '../types'

export const get3rdParam = (...args: any[]) => args[2]

type getDckState = (section: string) => any

const emptyState: TState = {}

function _getDckState(section: string): any {
  return function(state: TState, itemType: string): any {
    return state?.dck?.[section]?.[itemType] || emptyState
  }
}

export const getDckState: getDckState = createSelector(
  _getDckState,
  dckState => dckState
)
