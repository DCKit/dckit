import { createSelector } from '@reduxjs/toolkit'
import { IState } from '../types'

export const get3rdParam = (...args: any[]) => args[2]

type getDckState = (section: string) => any

const emptyState: IState = {}

function _getDckState(section: string): any {
  return function(state: IState, itemType: string): any {
    return state?.dck?.[section]?.[itemType] || emptyState
  }
}

export const getDckState: getDckState = createSelector(
  _getDckState,
  dckState => dckState
)
