import { takeLatest } from 'redux-saga/effects'
import { Acts, IAction } from '../types'
import { Process, TProcess } from './processes'
import { isAction } from './actions'

export const enum Flows {
  LoadAll = 'LoadAll',
}

function createFlow(act: Acts, genericSaga?: any) {
  function flow(itemType: string, flowSaga?: any, options?: any) {
    function* genericFlowSaga(action: IAction) {
      const proc = Process.create(act)(itemType, options)
      yield proc.start()
      try {
        const saga = genericSaga || flowSaga
        yield saga(proc, action)
        yield proc.stop()
      } catch (e) {
        yield proc.fail(e)
      }
    }
    return takeLatest(isAction[act](itemType), genericFlowSaga)
  }
  return flow
}

function* loadAllSaga(proc: TProcess, action: IAction) {
  yield proc.fetch(action)
  yield proc.setItems(proc.data())
}

export const Flow = Object.freeze({
  [Flows.LoadAll]: createFlow(Acts.Load, loadAllSaga),
  [Acts.Load]: createFlow(Acts.Load),
  [Acts.Add]: createFlow(Acts.Add),
  [Acts.Update]: createFlow(Acts.Update),
  [Acts.Delete]: createFlow(Acts.Delete),
  [Acts.Import]: createFlow(Acts.Import),
  [Acts.Export]: createFlow(Acts.Export),
})
