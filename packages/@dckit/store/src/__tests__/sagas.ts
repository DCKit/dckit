import { all, takeLatest, put } from 'redux-saga/effects'
import { Process } from '../helpers/processes'
import { isAction } from '../helpers/actions'
import {
  testLoadFetcher,
  testAddFetcher,
  testDeleteFetcher,
  failFetcher,
} from './fetchers'
import { TestItem, testItems } from './testData'
import { IAction } from '../types'
import { dckActions } from '..'

export function* testSaga() {
  yield all([
    takeLatest(isAction.Load(TestItem), loadItemsSaga),
    takeLatest(isAction.Add(TestItem), addItemSaga),
    takeLatest(isAction.Delete(TestItem), deleteItemSaga),
    takeLatest(isAction.Update(TestItem), batchSaga),
    takeLatest(isAction.Import(TestItem), batchSaga),
    takeLatest(isAction.Export(TestItem), batchSaga),
    takeLatest(isAction.Select(TestItem), failSelectSaga),
  ])
}

function* loadItemsSaga(action: IAction) {
  const proc = new Process.Load(TestItem, {
    fetcher: testLoadFetcher,
    pageble: true,
  })
  yield proc.setCurrentPage(3)
  yield proc.setPageSize(10)
  yield proc.start()

  yield proc.fetch()
  yield proc.setItems(proc.data)
  yield proc.optItem(action.meta.options.optedItemId)

  yield proc.stop({ message: 'done' })
}

function* addItemSaga(action: IAction) {
  const proc = new Process.Add(TestItem, {
    fetcher: testAddFetcher,
  })
  yield proc.start()
  yield proc.fetch(action.payload)
  yield proc.setItem(proc.response.id, proc.data)
  yield proc.stop()
}

function* deleteItemSaga(action: IAction) {
  const proc = new Process.Delete(TestItem, {
    fetcher: testDeleteFetcher,
  })
  yield proc.setItems(testItems)
  yield proc.start()
  yield proc.fetch({ id: action.meta.id })
  yield put(dckActions.removeItem(TestItem, 1))
  yield proc.stop()
}

function* batchSaga() {
  const procUpdate = new Process.Update(TestItem, {
    fetcher: () => ({ data: void 0 }),
  })
  const procImport = new Process.Import(TestItem)
  const procExport = new Process.Export(TestItem)

  yield procUpdate.setItems()
  const totalItems = (yield procUpdate.totalItems()) || 1
  const totalPages = (yield procImport.totalPages()) || 2
  const dummy = (yield procExport.itemProp('dummy')) || 3

  yield procImport.start()
  yield procExport.start()

  yield procUpdate.start()
  yield procImport.start()
  yield procExport.start()

  yield procUpdate.fetch()
  yield procImport.fetch()
  yield procExport.fetch()

  yield procExport.setItemProp('status', `${totalItems}${totalPages}${dummy}`)
  yield procExport.fail()
  yield procExport.reset()
}

function* failSelectSaga(action: any) {
  const proc = new Process('__select__', undefined, {
    fetcher: failFetcher,
  })
  yield proc.start()
  try {
    yield proc.fetch({ id: action.meta.id })
  } catch (e) {
    yield proc.fail(e)
  }
}
