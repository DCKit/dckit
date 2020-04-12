import { all } from 'redux-saga/effects'
import { Flow, Process } from '@dckit/store'
import { testLoadFetcher } from '../fetchers'
import { TestItem } from '../items'

Process.setFetcher(testLoadFetcher)

export function* rootSaga() {
  yield all([Flow.LoadAll(TestItem)])
}
