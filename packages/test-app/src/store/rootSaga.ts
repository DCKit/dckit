import { all, takeLatest } from 'redux-saga/effects'
import { createProcessLoad, isAction, IAction } from '@dckit/store'
import { testLoadFetcher } from '../fetchers'
import { TestItem } from '../items'

export function* rootSaga() {
  yield all([takeLatest(isAction.Load(TestItem), loadItemsSaga)])
}

function* loadItemsSaga(action: IAction) {
  const proc = createProcessLoad(TestItem, {
    fetcher: testLoadFetcher,
  })
  yield proc.start()
  try {
    yield proc.fetch()
    yield proc.setItems(proc.getData())
    yield proc.optItem(action?.meta?.options?.optedItemId)
    yield proc.stop()
  } catch (e) {
    yield proc.fail(e)
  }
}
