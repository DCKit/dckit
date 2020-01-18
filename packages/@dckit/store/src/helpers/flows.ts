import { takeLatest } from 'redux-saga/effects'
import { Acts, Process, isAction, IAction } from '../'

function createFlow(act: Acts) {
  function flow(itemType: string, saga: any, options?: any) {
    function* genericFlowSaga(action: IAction) {
      const proc = Process.create(act)(action.meta.itemType, options)
      yield proc.start()
      try {
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

export const Flow = Object.freeze({
  [Acts.Load]: createFlow(Acts.Load),
  [Acts.Add]: createFlow(Acts.Add),
  [Acts.Update]: createFlow(Acts.Update),
  [Acts.Delete]: createFlow(Acts.Delete),
  [Acts.Import]: createFlow(Acts.Import),
  [Acts.Export]: createFlow(Acts.Export),
})
