import { createAction } from '@reduxjs/toolkit'
import { TAction, ActionTypes, Acts } from '../types'

export const composeAction = (actionType: ActionTypes): any => {
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

const is = (actionType: ActionTypes): any => (itemType: string) => (
  action: TAction
) => action.type === actionType && action.meta.itemType === itemType

export const isAction = Object.freeze({
  [Acts.Opt]: is(ActionTypes.optItem),
  [Acts.Select]: is(ActionTypes.selectItem),
  [Acts.Load]: is(ActionTypes.loadItems),
  [Acts.Add]: is(ActionTypes.addItem),
  [Acts.Update]: is(ActionTypes.updateItem),
  [Acts.Delete]: is(ActionTypes.deleteItem),
  [Acts.Import]: is(ActionTypes.importItems),
  [Acts.Export]: is(ActionTypes.exportItems),
  [Acts.Generate]: is(ActionTypes.generateItems),
  [Acts.Submit]: is(ActionTypes.submitItems),
  [Acts.Validate]: is(ActionTypes.validateItems),
})
