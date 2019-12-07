import { createAction } from '@reduxjs/toolkit'
import { IAction, ActionTypes, Acts } from '../types'

export const composeAction = (actionType: string): any => {
  return createAction(actionType, params => {
    const { itemType, id, field, options, payload } = params
    return { meta: { itemType, id, field, options }, payload }
  })
}

/*
helpers for take* sagas effects

without helper:
  takeLatest(
    action =>
      action.type === ActionTypes.loadItems &&
      action.itemType === ItemType,
    loadItemsSaga
  )

with helper:
  takeLatest(isAction.Load(ItemType), loadItemsSaga)
*/

const is = (actionType: ActionTypes) => (itemType: string) => (
  action: IAction
) => action.type === actionType && action.meta.itemType === itemType

export const isAction: any = {
  [Acts.Load]: is(ActionTypes.loadItems),
  [Acts.Add]: is(ActionTypes.addItem),
  [Acts.Update]: is(ActionTypes.updateItem),
  [Acts.Delete]: is(ActionTypes.deleteItem),
  [Acts.Import]: is(ActionTypes.importItems),
  [Acts.Export]: is(ActionTypes.exportItems),
  [Acts.Opt]: is(ActionTypes.optItem),
  [Acts.Select]: is(ActionTypes.selectItem),
}
