import { createReducer } from '@reduxjs/toolkit'
import { ActionTypes } from '../types'
import { reducers } from '../reducers'

const { setItemProp } = reducers

export const processesReducer = createReducer(
  {},
  {
    [ActionTypes.processStart]: setItemProp,
    [ActionTypes.processReset]: setItemProp,
    [ActionTypes.processStop]: setItemProp,
    [ActionTypes.processFail]: setItemProp,
  }
)
