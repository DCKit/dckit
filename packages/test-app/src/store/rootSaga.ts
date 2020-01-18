import { all } from 'redux-saga/effects'
import { Flow, Process, TProcess, IAction } from '@dckit/store'
import { testLoadFetcher } from '../fetchers'
import { TestItem } from '../items'

Process.setFetcher(testLoadFetcher)

function* loadItemsSaga(proc: TProcess, action: IAction) {
  yield proc.fetch()
  yield proc.setItems(proc.data())
  yield proc.optItem(action?.meta?.options?.optedItemId)
}

export function* rootSaga() {
  yield all([Flow.Load(TestItem, loadItemsSaga)])
}
