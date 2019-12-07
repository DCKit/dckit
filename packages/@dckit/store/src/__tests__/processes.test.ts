import SagaTester from 'redux-saga-tester'
import { combineReducers, Reducer } from 'redux'
import { dckActions, dckSelectors, dckReducer } from '../index'
import { ActionTypes, Acts } from '../types'
import { testSaga } from './sagas'
import {
  TestItem,
  testItems,
  initialState,
  stateAfterBatchSagas,
  stateAfterLoadSaga,
  stateAfterAddSaga,
  stateAfterDeleteSaga,
  stateAfterSelectSaga,
} from './testData'
import { Process } from '../helpers/processes'

const reducers: Reducer = combineReducers({
  dck: dckReducer,
})

function* getSession(request: any) {
  return yield {
    ...request,
    token: 'SESSION_TOKEN',
  }
}

describe('process helpers', () => {
  it('should successfully execute batch of sagas with defaults', async () => {
    const sagaTester = new SagaTester({
      initialState,
      reducers,
    })
    expect(
      dckSelectors.isProcessRunning(initialState, TestItem, Acts.Opt)
    ).toEqual(false)
    expect(
      dckSelectors.isProcessFinished(initialState, TestItem, Acts.Opt)
    ).toEqual(false)

    sagaTester.start(testSaga)
    sagaTester.dispatch(dckActions.updateItem(TestItem, '1', {}))
    sagaTester.dispatch(dckActions.importItems(TestItem))
    sagaTester.dispatch(dckActions.exportItems(TestItem))

    await sagaTester.waitFor(ActionTypes.processReset)
    const state = sagaTester.getState()
    expect(state).toEqual(stateAfterBatchSagas)
  })

  Process.extendRequest = getSession

  it('should successfully execute loadItemsSaga', async () => {
    const sagaTester = new SagaTester({
      initialState,
      reducers,
    })
    sagaTester.start(testSaga)
    expect(sagaTester.getState()).toEqual(initialState)

    sagaTester.dispatch(dckActions.loadItems(TestItem, { optedItemId: 2 }))
    await sagaTester.waitFor(ActionTypes.processStop)
    const state = sagaTester.getState()
    expect(state).toEqual(stateAfterLoadSaga)

    expect(dckSelectors.isProcessRunning(state, TestItem, Acts.Load)).toEqual(
      false
    )
    expect(dckSelectors.isProcessSucceed(state, TestItem, Acts.Load)).toEqual(
      true
    )
    expect(
      dckSelectors.getProcessResponse(state, TestItem, Acts.Load)
    ).toEqual({ message: 'done' })

    expect(dckSelectors.getItems(state, TestItem)).toEqual(testItems)
    expect(dckSelectors.getOptedItemId(state, TestItem)).toEqual(2)
    expect(dckSelectors.getOptedItem(state, TestItem)).toEqual(testItems[1])
    expect(dckSelectors.getPageSize(state, TestItem)).toEqual(10)
    expect(dckSelectors.getCurrentPage(state, TestItem)).toEqual(0)
    expect(dckSelectors.getTotalItems(state, TestItem)).toEqual(5)
    expect(dckSelectors.getTotalPages(state, TestItem)).toEqual(1)
  })

  it('should successfully execute addItemSaga', async () => {
    const sagaTester = new SagaTester({
      initialState,
      reducers,
    })
    const action = dckActions.addItem(TestItem, {
      id: 3,
      data: 'testData3',
    })

    sagaTester.start(testSaga)
    sagaTester.dispatch(action)
    await sagaTester.waitFor(ActionTypes.processStop)

    const state = sagaTester.getState()
    expect(state).toEqual(stateAfterAddSaga)
    expect(dckSelectors.isProcessFinished(state, TestItem, Acts.Add)).toEqual(
      true
    )
  })

  it('should successfully execute deleteItemSaga', async () => {
    const sagaTester = new SagaTester({
      initialState,
      reducers,
    })
    const action = dckActions.deleteItem(TestItem, 1)

    sagaTester.start(testSaga)
    sagaTester.dispatch(action)
    await sagaTester.waitFor(ActionTypes.processStop)

    const state = sagaTester.getState()
    expect(state).toEqual(stateAfterDeleteSaga)
    expect(dckSelectors.isProcessFailed(state, TestItem, Acts.Delete)).toEqual(
      false
    )
  })

  it('should successfully execute failSelectSaga', async () => {
    const sagaTester = new SagaTester({
      initialState,
      reducers,
    })
    const action = dckActions.selectItem(TestItem, '1', true)

    sagaTester.start(testSaga)
    sagaTester.dispatch(action)
    await sagaTester.waitFor(ActionTypes.processFail)

    const state = sagaTester.getState()
    expect(state).toEqual(stateAfterSelectSaga)
    expect(dckSelectors.isProcessFailed(state, TestItem, Acts.Add)).toEqual(
      true
    )
  })
})
