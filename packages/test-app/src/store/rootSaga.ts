import { all, takeLatest } from 'redux-saga/effects'
import { Process, isAction, IAction } from '@dckit/store'
import { testLoadFetcher } from '../fetchers'
import { TestItem } from '../items'

export function* rootSaga() {
  yield all([takeLatest(isAction.Load(TestItem), loadItemsSaga)])
}

function* loadItemsSaga(action: IAction) {
  const proc = new Process.Load(TestItem, {
    fetcher: testLoadFetcher,
  })
  yield proc.start()
  try {
    yield proc.fetch()
    yield proc.setItems(proc.data)
    yield proc.optItem(action.meta.options.optedItemId)
    yield proc.stop()
  } catch (e) {
    yield proc.fail(e)
  }
}
