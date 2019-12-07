import { composeAction } from '../helpers/actions'
import { IAction, ActionTypes, TAct } from '../types'

// action creators for processes

export function processStart(itemType: string, process: TAct): IAction {
  return composeAction(ActionTypes.processStart)({
    itemType,
    field: process,
    payload: {
      running: true,
      error: false,
      finished: false,
      response: void 0,
    },
  })
}

export function processReset(itemType: string, process: TAct): IAction {
  return composeAction(ActionTypes.processReset)({
    itemType,
    field: process,
    payload: {
      running: false,
      error: false,
      finished: false,
      response: void 0,
    },
  })
}

export function processStop(
  itemType: string,
  process: TAct,
  response?: any
): IAction {
  return composeAction(ActionTypes.processStop)({
    itemType,
    field: process,
    payload: {
      running: false,
      error: false,
      finished: true,
      response,
    },
  })
}

export function processFail(
  itemType: string,
  process: TAct,
  response: any
): IAction {
  return composeAction(ActionTypes.processFail)({
    itemType,
    field: process,
    payload: {
      running: false,
      error: true,
      finished: true,
      response,
    },
  })
}
