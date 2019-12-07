import { createReducer } from '@reduxjs/toolkit'
import { ActionTypes } from '../types'
import { reducers } from '../reducers'

const { setItems, setItem, removeItem, optItem, selectItem } = reducers

export const itemsReducer = createReducer(
  {},
  {
    [ActionTypes.setItems]: setItems,
    [ActionTypes.setItem]: setItem,
    [ActionTypes.removeItem]: removeItem,
    [ActionTypes.optItem]: optItem,
    [ActionTypes.selectItem]: selectItem,
  }
)
